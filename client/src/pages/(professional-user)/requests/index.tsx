import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { ContractRequests } from "./types"
import { ContractRequestCard } from "./_partials/contract-request"

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
                {requests.length == 0 && (
                    <p>Você não possui nenhuma solicitação de contratação.</p>
                )}
                <div className="grid grid-cols-2 gap-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {requests.map(request => (
                        <ContractRequestCard
                            key={request.idContratacao}
                            {...request}
                        />
                    ))}
                </div>
            </>
        )
}
