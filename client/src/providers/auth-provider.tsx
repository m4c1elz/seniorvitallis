import { api } from "@/lib/api"
import { UsuarioComum } from "@/types/usuario-comum"
import { useMutation, UseMutationResult } from "@tanstack/react-query"
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
        },
    })

    const value = {
        isAuth,
        loginMutation,
        user,
    } satisfies AuthContextType

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
