import {
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { api } from "@/lib/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"

interface RejectContractDialogProps {
    toggleDialogFn: (open: boolean) => void
    requestId: number
}

export function RejectContractDialog({
    toggleDialogFn,
    requestId,
}: RejectContractDialogProps) {
    const { toast } = useToast()
    const queryClient = useQueryClient()

    const { mutateAsync: cancelRequest, isPending } = useMutation({
        mutationFn: async () => {
            await api.patch(`/professional-user/requests/${requestId}/cancel`)
            toggleDialogFn(false)
        },
        onSuccess: () => {
            toast({
                description: "Solicitação rejeitada.",
            })
            queryClient.invalidateQueries({
                queryKey: ["get-contract-requests"],
            })
        },
    })

    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Tem certeza que deseja cancelar a contratação?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    O usuário comum poderá ver o status da contratação atual
                    como cancelada ao rejeitar sua solicitação.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <Button
                    variant="destructive"
                    disabled={isPending}
                    onClick={() => cancelRequest()}
                >
                    {isPending ? (
                        <>
                            <LoaderCircle className="animate-spin" /> Aguarde...
                        </>
                    ) : (
                        "Sim, cancelar"
                    )}
                </Button>
                <AlertDialogCancel asChild>
                    <Button className="bg-slate-500 hover:bg-slate-400">
                        Não, mudei de ideia
                    </Button>
                </AlertDialogCancel>
            </AlertDialogFooter>
        </>
    )
}
