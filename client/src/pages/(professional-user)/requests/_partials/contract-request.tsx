import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
} from "@/components/ui/alert-dialog"
import { CalendarDays, CalendarX } from "lucide-react"
import { AcceptContractDialog } from "./accept-contract-dialog"
import { ContractRequest } from "../types"
import { RejectContractDialog } from "./reject-contract-dialog"
import { useState } from "react"

interface ContractRequestCardProps extends ContractRequest {}

export function ContractRequestCard({
    usuarioComum,
    dataContratacao,
    prazoContratacao,
    idContratacao,
}: ContractRequestCardProps) {
    const [acceptDialogOpen, setAcceptDialogOpen] = useState(false)
    const [rejectDialogOpen, setRejectDialogOpen] = useState(false)

    return (
        <Card className="flex w-64 flex-col text-center">
            <CardHeader className="flex-1">
                <div className="border-accent m-auto mb-2 grid aspect-square h-32 place-content-center rounded border bg-gray-200">
                    <img
                        src=""
                        alt={`${usuarioComum.nome}`}
                        className="text-center"
                    />
                </div>
                <CardTitle>{usuarioComum.nome}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                    <CalendarDays />
                    <p className="whitespace-nowrap text-sm font-medium">
                        Solicitado em{" "}
                        {new Date(dataContratacao).toLocaleDateString("pt-br")}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarX />
                    <p className="whitespace-nowrap text-sm font-medium">
                        Válido até{" "}
                        {new Date(prazoContratacao).toLocaleDateString("pt-br")}
                    </p>
                </div>
                <CardFooter className="flex-col gap-3 p-0 pt-2">
                    <div className="flex w-full items-center gap-2">
                        <Dialog
                            open={acceptDialogOpen}
                            onOpenChange={setAcceptDialogOpen}
                        >
                            <DialogTrigger asChild>
                                <Button className="w-1/2">Aceitar</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AcceptContractDialog
                                    toggleDialogFn={setAcceptDialogOpen}
                                />
                            </DialogContent>
                        </Dialog>
                        <AlertDialog
                            open={rejectDialogOpen}
                            onOpenChange={setRejectDialogOpen}
                        >
                            <AlertDialogTrigger asChild>
                                <Button className="w-1/2" variant="destructive">
                                    Recusar
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <RejectContractDialog
                                    requestId={idContratacao}
                                    toggleDialogFn={setRejectDialogOpen}
                                />
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                    <Button variant="secondary" className="w-full">
                        Enviar mensagem
                    </Button>
                </CardFooter>
            </CardContent>
        </Card>
    )
}
