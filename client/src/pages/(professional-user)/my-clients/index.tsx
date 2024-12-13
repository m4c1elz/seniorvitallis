import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Clients } from "./types"
import { MyClientsContent } from "./_content"

export default function MyClients() {
    const { data: clients, isPending } = useQuery<Clients>({
        queryKey: ["get-my-clients"],
        queryFn: async () => {
            const response = await api.get("/professional-user/my-clients")
            return response.data
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (clients) return <MyClientsContent clients={clients} />
}
