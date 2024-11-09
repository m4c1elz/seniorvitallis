import { useAuth } from "@/providers/auth-provider"

export default function History() {
    const { user } = useAuth()

    return <div>Hello {user?.nome}</div>
}
