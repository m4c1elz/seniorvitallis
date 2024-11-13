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
            className="transition px-4 py-3 flex border border-black/20 justify-between items-center cursor-pointer hover:bg-black/5"
        >
            <div className="space-y-2">
                <h3 className="font-medium text-lg">
                    {usuarioProfissional.nome}
                </h3>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
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
            <div className="h-32 aspect-square border border-accent bg-gray-200 grid place-content-center rounded">
                <img src="" alt={`Imagem de ${usuarioProfissional.nome}`} />
            </div>
        </Card>
    )
}
