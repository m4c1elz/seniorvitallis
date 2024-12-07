import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { CalendarDays, CalendarX } from "lucide-react"
import { AcceptContractDialog } from "./accept-contract-dialog"
import { ContractRequest } from "../types"

interface ContractRequestCardProps extends ContractRequest {}

export function ContractRequestCard({
    usuarioComum,
    dataContratacao,
    prazoContratacao,
}: ContractRequestCardProps) {
    return (
        <Card className="w-64 text-center">
            <CardHeader>
                <div className="border-accent m-auto grid aspect-square w-32 place-content-center rounded border bg-gray-200">
                    <img
                        src=""
                        alt={`${usuarioComum.nome}`}
                        className="text-center"
                    />
                </div>
                <CardTitle>{usuarioComum.nome}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                    <CalendarDays />
                    <p className="text-sm font-medium">
                        Solicitado em{" "}
                        {new Date(dataContratacao).toLocaleDateString("pt-br")}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarX />
                    <p className="text-sm font-medium">
                        Válido até{" "}
                        {new Date(prazoContratacao).toLocaleDateString("pt-br")}
                    </p>
                </div>
                <CardFooter className="flex-col gap-3 p-0 pt-2">
                    <div className="flex w-full items-center gap-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="w-1/2">Aceitar</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AcceptContractDialog />
                            </DialogContent>
                        </Dialog>
                        <Button className="w-1/2" variant="destructive">
                            Recusar
                        </Button>
                    </div>
                    <Button variant="secondary" className="w-full">
                        Ir ao chat
                    </Button>
                </CardFooter>
            </CardContent>
        </Card>
    )
}
