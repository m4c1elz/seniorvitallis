import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { useQueryClient } from "@tanstack/react-query"
import { LoaderCircle } from "lucide-react"

interface AcceptContractDialogProps {
    toggleDialogFn: (open: boolean) => void
    requestId: number
}

interface AcceptFormType {
    price: number
}

export function AcceptContractDialog({
    requestId,
    toggleDialogFn,
}: AcceptContractDialogProps) {
    const { register, handleSubmit } = useForm<AcceptFormType>()
    const { toast } = useToast()
    const queryClient = useQueryClient()

    const { mutateAsync: acceptRequest, isPending } = useMutation({
        mutationFn: async (price: number) => {
            await api.patch(`/professional-user/requests/${requestId}/accept`, {
                price,
            })
            toggleDialogFn(false)
        },
        onSuccess: () => {
            toast({
                title: "Contratado!",
                description: "Contratação aceita com sucesso.",
            })
            queryClient.invalidateQueries({
                queryKey: ["get-contract-requests"],
            })
        },
    })

    function onSubmit({ price }: AcceptFormType) {
        acceptRequest(price)
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle>Aceitar contratação</DialogTitle>
                <DialogDescription>
                    Defina um preço para a contratação atual.
                </DialogDescription>
                <form
                    className="flex-1 space-y-2"
                    id="accept-request-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Label htmlFor="price">Preço (R$)</Label>
                    <Input type="number" {...register("price")} />
                </form>
                <DialogFooter className="pt-2">
                    <Button
                        type="submit"
                        form="accept-request-form"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <LoaderCircle className="animate-spin" />{" "}
                                Aguarde...
                            </>
                        ) : (
                            "Aceitar"
                        )}
                    </Button>
                    <DialogClose asChild>
                        <Button variant="destructive">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogHeader>
        </>
    )
}
