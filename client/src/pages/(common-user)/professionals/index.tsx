import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Professional } from "./types"
import { ProfessionalsContent } from "./_content"
import { useSearchParams } from "react-router-dom"

export default function Professionals() {
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const { data: professionals, isPending } = useQuery({
        queryKey: ["get-professionals", { search }],
        queryFn: async () => {
            const response = await api.get("/common-user/professionals", {
                params: { search },
            })
            return response.data as Professional[]
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (professionals)
        return <ProfessionalsContent professionals={professionals} />
}
