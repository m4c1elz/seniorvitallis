import { api } from "@/lib/api"
import { useParams } from "@/router"
import { useQuery } from "@tanstack/react-query"
import { IndividualProfessionalResponse } from "./types"
import { ProfessionalContent } from "./_content"

export default function Professional() {
    const { id } = useParams("/professionals/:id")

    const { data: professional, isPending } = useQuery({
        queryKey: ["get-professional", { id }],
        queryFn: async () => {
            const response = await api.get("/common-user/professionals/" + id)
            return response.data as IndividualProfessionalResponse
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (professional) return <ProfessionalContent {...professional} />
}
