import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { useAuth } from "@/providers/auth-provider"
import { useNavigate } from "@/router"
import { LoaderCircle } from "lucide-react"

export function LogoutButton() {
    const { logoutMutation } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        await logoutMutation.mutateAsync()
        navigate("/login")
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Terminar Sessão</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Encerrar sessão?</DialogTitle>
                    <DialogDescription>
                        Você pode sempre voltar realizando login novamente.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="destructive"
                        onClick={handleLogout}
                        disabled={logoutMutation.isPending}
                    >
                        {logoutMutation.isPending ? (
                            <>
                                <LoaderCircle className="animate-spin" />{" "}
                                Encerrando...
                            </>
                        ) : (
                            "Sim, encerrar"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
