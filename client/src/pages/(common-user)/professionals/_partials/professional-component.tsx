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
        <Card className="grid place-content-center px-4 py-3 transition hover:bg-black/5">
            <Link
                to="/professionals/:id"
                params={{
                    id: String(idProfissional),
                }}
                key={idProfissional}
            >
                <CardContent className="flex flex-col items-center justify-center gap-4">
                    <div className="border-accent grid aspect-square h-32 place-content-center rounded border bg-gray-200">
                        <img src="" alt={`${nome}`} className="text-center" />
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-xl font-bold">{nome}</h1>
                        <p className="text-sm">{especialidade}</p>
                        <Availability availability={disponibilidade} />
                    </div>
                </CardContent>
            </Link>
        </Card>
    )
}
