import { api } from "@/lib/api"
import { useParams } from "@/router"
import { useQuery } from "@tanstack/react-query"
import { IndividualProfessionalResponse } from "./types"
import { Availability } from "../_partials/availability"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
    if (professional) {
        return (
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <div className="space-y-4">
                        <h3>{professional.nome}</h3>
                        <Availability
                            availability={professional.disponibilidade}
                        />
                        <Button className="w-min">Contratar</Button>
                    </div>
                    <Avatar className="border-accent border-2 w-48 h-48">
                        <AvatarFallback className="bg-zinc-200" />
                    </Avatar>
                </div>
                <div className="space-y-4">
                    <h4>Avaliação</h4>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center">
                            {Array.from({
                                length: Math.floor(professional.notaMedia),
                            }).map(() => (
                                <Star className="text-yellow-500 fill-yellow-500" />
                            ))}
                            {Array.from({
                                length: Math.floor(5 - professional.notaMedia),
                            }).map(() => (
                                <Star className="text-yellow-500" />
                            ))}
                        </div>
                        <h5>{professional.notaMedia.toFixed(1)}</h5>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4>Descrição</h4>
                    <p>{professional.descricao}</p>
                </div>
                <div className="space-y-4">
                    <h4>Especialidade</h4>
                    <p>{professional.especialidade}</p>
                </div>
            </div>
        )
    }
}
