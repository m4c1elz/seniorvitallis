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

interface AcceptContractDialogProps {
    toggleDialogFn: (open: boolean) => void
}

export function AcceptContractDialog({
    toggleDialogFn,
}: AcceptContractDialogProps) {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Aceitar contratação</DialogTitle>
                <DialogDescription>
                    Defina um preço para a contratação atual.
                </DialogDescription>
                <form className="flex-1 space-y-2">
                    <Label htmlFor="price">Preço (R$)</Label>
                    <Input type="number" name="price" prefix="R$" />
                </form>
                <DialogFooter className="pt-2">
                    <Button>Aceitar</Button>
                    <DialogClose asChild>
                        <Button variant="destructive">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogHeader>
        </>
    )
}
