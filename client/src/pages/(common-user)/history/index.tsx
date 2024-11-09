import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Contract } from "./types"
import { HistoryContent } from "./_content"

export default function History() {
    const { data: contracts, isPending } = useQuery({
        queryKey: ["get-current-professionals"],
        queryFn: async () => {
            const response = await api.get("/common-user/professionals/history")
            return response.data as Contract[]
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (contracts) return <HistoryContent contracts={contracts} />
}
