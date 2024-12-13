import { ContractRequestCard } from "./_partials/contract-request"
import { ContractRequests } from "./types"

interface RequestsContentProps {
    requests: ContractRequests
}

export function RequestsContent({ requests }: RequestsContentProps) {
    return (
        <>
            <h3>Solicitações de contratação</h3>
            {requests.length > 0 ? (
                <div className="grid grid-cols-2 gap-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {requests.map(request => (
                        <ContractRequestCard
                            key={request.idContratacao}
                            {...request}
                        />
                    ))}
                </div>
            ) : (
                <p>Você não possui nenhuma solicitação de contratação.</p>
            )}
        </>
    )
}
