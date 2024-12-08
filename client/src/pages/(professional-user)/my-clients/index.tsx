import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Clients } from "./types"
import { ClientCard } from "./_partials/client-card"

export default function MyClients() {
    const { data: clients, isPending } = useQuery<Clients>({
        queryKey: ["get-my-clients"],
        queryFn: async () => {
            const response = await api.get("/professional-user/my-clients")
            return response.data
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (clients) {
        return (
            <>
                <h3>Meus clientes</h3>
                {clients.map(client => (
                    <ClientCard key={client.idContratacao} {...client} />
                ))}
            </>
        )
    }
}
