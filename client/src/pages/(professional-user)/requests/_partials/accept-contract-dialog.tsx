import {
    DialogHeader,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function AcceptContractDialog() {
    return (
        <>
            <DialogHeader>
                <DialogDescription>
                    Defina um preço para a contratação atual.
                </DialogDescription>
                <form className="flex-1 space-y-2">
                    <Label htmlFor="price">Preço</Label>
                    <Input type="number" name="price" />
                </form>
                <DialogFooter className="pt-2">
                    <Button>Aceitar</Button>
                    <DialogClose>
                        <Button variant="destructive">Cancelar</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogHeader>
        </>
    )
}
