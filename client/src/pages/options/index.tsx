import { AppSidebar } from "@/components/app-sidebar"
import { AppTabs } from "@/components/app-tabs"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/providers/auth-provider"
import { useNavigate } from "@/router"

export default function Options() {
    const { logoutMutation } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        await logoutMutation.mutateAsync()
        navigate("/login")
    }

    return (
        <div className="flex">
            <AppSidebar />
            <AppTabs />
            <div className="mx-auto my-12 h-screen w-11/12 space-y-4 overflow-auto pb-16 md:w-3/5">
                <h3>Opções</h3>
                <section className="space-y-2">
                    <h5>Terminar sessão</h5>
                    <p className="text-foreground/50">
                        Deslogar da sessão atual.
                    </p>
                    <Button variant="destructive" onClick={handleLogout}>
                        Terminar Sessão
                    </Button>
                </section>
            </div>
        </div>
    )
}
