import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { ContractRequests } from "./types"
import { Calendar } from "lucide-react"

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
                <h1>Solicitações de contratação</h1>
                {requests.map(request => (
                    <div>
                        <h3>{request.usuarioComum.nome}</h3>
                        <div className="flex items-center gap-2">
                            <Calendar />
                            <p>
                                Solicitado em{" "}
                                {new Date(
                                    request.dataContratacao,
                                ).toLocaleDateString("pt-br")}
                            </p>
                        </div>
                    </div>
                ))}
            </>
        )
}
