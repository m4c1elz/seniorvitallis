import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Professional } from "./types"
import { ProfessionalsContent } from "./_content"

export default function Professionals() {
    const { data: professionals, isPending } = useQuery({
        queryKey: ["get-professionals"],
        queryFn: async () => {
            const response = await api.get("/common-user/professionals")
            return response.data as Professional[]
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (professionals)
        return <ProfessionalsContent professionals={professionals} />
}
