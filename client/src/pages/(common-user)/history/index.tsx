import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Contract } from "./types"
import { HistoryContent } from "./_content"
import { useSearchParams } from "react-router-dom"

export default function History() {
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")
    const status = searchParams.get("status")

    const { data: contracts, isPending } = useQuery({
        queryKey: ["get-current-professionals", { search, status }],
        queryFn: async () => {
            const response = await api.get(
                "/common-user/professionals/history",
                {
                    params: { search, status },
                },
            )
            return response.data as Contract[]
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (contracts) return <HistoryContent contracts={contracts} />
}
