import { setupAxiosInterceptors } from "@/helpers/setup-axios-interceptors"
import { api } from "@/lib/api"
import { UsuarioComum } from "@/types/usuario-comum"
import { UsuarioProfissional } from "@/types/usuario-profissional"
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { createContext, useState, PropsWithChildren, useContext } from "react"

interface AuthContextType {
    commonLoginMutation: UseMutationResult<
        void,
        Error,
        {
            email: string
            password: string
        },
        unknown
    >
    professionalLoginMutation: UseMutationResult<
        void,
        Error,
        {
            email: string
            password: string
        },
        unknown
    >
    user: UsuarioComum | UsuarioProfissional | null
    isAuth: boolean
    logoutMutation: UseMutationResult<void, Error, void, unknown>
}

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps extends PropsWithChildren {}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState<UsuarioComum | UsuarioProfissional | null>(
        null,
    )

    const { isPending } = useQuery({
        queryKey: ["refresh-token"],
        queryFn: async () => {
            const refreshResponse = await api.get("/auth/refresh")
            if (refreshResponse.status !== 200) {
                window.location.href = "/login"
                throw new Error()
            }
            try {
                const response = await api.get("/common-user/me")
                const user = response.data as UsuarioComum
                setUser(user)
            } catch (error) {
                if (error instanceof AxiosError && error.status == 404) {
                    const response = await api.get("/professional-user/me")
                    const user = response.data as UsuarioProfissional
                    setUser(user)
                }
            }
            setIsAuth(true)
            setupAxiosInterceptors(api)
        },
        retry: false,
    })

    const commonLoginMutation = useMutation({
        mutationKey: ["login"],
        mutationFn: async (userRequest: {
            email: string
            password: string
        }) => {
            const response = await api.post(
                "/auth/common-user/login",
                userRequest,
            )
            const user = response.data as UsuarioComum
            setUser(user)
            setIsAuth(true)

            setupAxiosInterceptors(api)
        },
    })

    const professionalLoginMutation = useMutation({
        mutationKey: ["professional-login"],
        mutationFn: async (userRequest: {
            email: string
            password: string
        }) => {
            const response = await api.post(
                "/auth/professional/login",
                userRequest,
            )
            const user = response.data as UsuarioProfissional
            setUser(user)
            setIsAuth(true)

            setupAxiosInterceptors(api)
        },
    })

    const logoutMutation = useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            await api.post("/auth/logout")
            setUser(null)
            setIsAuth(false)
            api.interceptors.response.clear()
        },
    })

    const value = {
        isAuth,
        commonLoginMutation,
        professionalLoginMutation,
        user,
        logoutMutation,
    } satisfies AuthContextType

    if (isPending) {
        return <div>Carregando...</div>
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(
            "useAuth só pode ser usado dentro de um </AuthProvider>.",
        )
    }

    return context
}
