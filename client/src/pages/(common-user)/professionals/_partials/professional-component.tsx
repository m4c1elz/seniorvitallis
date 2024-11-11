import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/router"
import { Professional } from "../types"
import { Availability } from "./availability"

interface ProfessionalComponentProps extends Professional {}

export function ProfessionalComponent({
    idProfissional,
    nome,
    especialidade,
    disponibilidade,
}: ProfessionalComponentProps) {
    return (
        <Card className="grid place-content-center py-3 px-4">
            <Link
                to="/professionals/:id"
                params={{
                    id: String(idProfissional),
                }}
                key={idProfissional}
            >
                <CardContent className="flex flex-col justify-center items-center gap-4">
                    <div className="h-32 aspect-square border border-accent bg-gray-200 grid place-content-center rounded">
                        <img src="" alt={`${nome}`} className="text-center" />
                    </div>
                    <div className="space-y-1 text-center">
                        <h1 className="text-xl font-bold">{nome}</h1>
                        <p className="text-sm">{especialidade}</p>
                        <Availability availability={disponibilidade} />
                    </div>
                </CardContent>
            </Link>
        </Card>
    )
}
