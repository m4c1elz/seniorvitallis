import { ClientCard } from "./_partials/client-card"
import { Clients } from "./types"

interface MyClientsContentProps {
    clients: Clients
}

export function MyClientsContent({ clients }: MyClientsContentProps) {
    return (
        <>
            <h3>Meus clientes</h3>
            {clients.length > 0 ? (
                clients.map(client => (
                    <ClientCard key={client.idContratacao} {...client} />
                ))
            ) : (
                <p>Você não possui clientes.</p>
            )}
        </>
    )
}
