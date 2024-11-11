import { setupAxiosInterceptors } from "@/helpers/setup-axios-interceptors"
import { api } from "@/lib/api"
import { UsuarioComum } from "@/types/usuario-comum"
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query"
import { createContext, useState, PropsWithChildren, useContext } from "react"

interface AuthContextType {
    loginMutation: UseMutationResult<
        void,
        Error,
        {
            email: string
            password: string
        },
        unknown
    >
    user: UsuarioComum | null
    isAuth: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps extends PropsWithChildren {}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState<UsuarioComum | null>(null)

    const { isPending } = useQuery({
        queryKey: ["refresh-token"],
        queryFn: async () => {
            const refreshResponse = await api.get("/auth/refresh")
            if (refreshResponse.status !== 200) {
                window.location.href = "/login"
                throw new Error()
            }
            const response = await api.get("/common-user/me")
            const user = response.data as UsuarioComum
            setUser(user)
            setIsAuth(true)
            setupAxiosInterceptors(api)
        },
        retry: false,
    })

    const loginMutation = useMutation({
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

    const value = {
        isAuth,
        loginMutation,
        user,
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
