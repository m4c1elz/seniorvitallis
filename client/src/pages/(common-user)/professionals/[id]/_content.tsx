import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Availability } from "../_partials/availability"
import { IndividualProfessionalResponse } from "./types"
import { Stars } from "./_partials/stars"

interface ProfessionalContentProps extends IndividualProfessionalResponse {}

export function ProfessionalContent({
    descricao,
    disponibilidade,
    nome,
    especialidade,
    notaMedia,
}: ProfessionalContentProps) {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-4">
                    <h3>{nome}</h3>
                    <Availability availability={disponibilidade} />
                    <Button className="w-min">Contratar</Button>
                </div>
                <Avatar className="border-accent h-48 w-48 border-2">
                    <AvatarFallback className="bg-zinc-200" />
                </Avatar>
            </div>
            <div className="space-y-4">
                <h4>Avaliação</h4>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Stars reviewCount={notaMedia} />
                    </div>
                    <h5>{notaMedia.toFixed(1)}</h5>
                </div>
            </div>
            <div className="space-y-4">
                <h4>Descrição</h4>
                <p>{descricao}</p>
            </div>
            <div className="space-y-4">
                <h4>Especialidade</h4>
                <p>{especialidade}</p>
            </div>
        </div>
    )
}
