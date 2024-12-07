import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { ContractRequests } from "./types"
import { CalendarDays, CalendarX } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { AcceptContractDialog } from "./_partials/accept-contract-dialog"

export default function Requests() {
    const { data: requests, isPending } = useQuery<ContractRequests>({
        queryKey: ["get-contract-requests"],
        queryFn: async () => {
            const response = await api.get("/professional-user/requests")
            return response.data
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (requests)
        return (
            <>
                <h3>Solicitações de contratação</h3>
                {requests.map(request => (
                    <Card className="w-64 text-center">
                        <CardHeader>
                            <CardTitle>{request.usuarioComum.nome}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center gap-2">
                                <CalendarDays />
                                <p className="text-sm font-medium">
                                    Solicitado em{" "}
                                    {new Date(
                                        request.dataContratacao,
                                    ).toLocaleDateString("pt-br")}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarX />
                                <p className="text-sm font-medium">
                                    Válido até{" "}
                                    {new Date(
                                        request.prazoContratacao,
                                    ).toLocaleDateString("pt-br")}
                                </p>
                            </div>
                            <div className="flex w-full items-center gap-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="flex-1">
                                            Aceitar
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <AcceptContractDialog />
                                    </DialogContent>
                                </Dialog>
                                <Button
                                    className="flex-1"
                                    variant="destructive"
                                >
                                    Recusar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </>
        )
}
