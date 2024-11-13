import { Card } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import { Contract as ContractType } from "../types"
import { ContractStatus } from "./status"

interface ContractProps extends ContractType {}

export function Contract({
    usuarioProfissional,
    dataContratacao,
    statusContratacao,
}: ContractProps) {
    return (
        <Card
            key={usuarioProfissional.idProfissional}
            className="flex cursor-pointer items-center justify-between border border-black/20 px-4 py-3 transition hover:bg-black/5"
        >
            <div className="space-y-2">
                <h3 className="text-lg font-medium">
                    {usuarioProfissional.nome}
                </h3>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <CalendarDays />
                        <p>
                            Solicitado em{" "}
                            {new Date(dataContratacao).toLocaleDateString(
                                "pt-br",
                            )}
                        </p>
                    </div>
                    <ContractStatus status={statusContratacao} />
                </div>
            </div>
            <div className="border-accent grid aspect-square h-32 place-content-center rounded border bg-gray-200">
                <img src="" alt={`Imagem de ${usuarioProfissional.nome}`} />
            </div>
        </Card>
    )
}
