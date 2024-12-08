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
                {requests.map(request => (
                    <ContractRequestCard
                        key={request.idContratacao}
                        {...request}
                    />
                ))}
            </>
        )
}
