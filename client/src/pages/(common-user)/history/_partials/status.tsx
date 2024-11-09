import { type Contract } from "../types"
import { CheckCircle } from "lucide-react"

interface ContractStatusProps {
    status: Contract["statusContratacao"]
}

export function ContractStatus({ status }: ContractStatusProps) {
    const possibleStatus = {
        concluida: (
            <div className="flex gap-2 items-center text-accent">
                <CheckCircle />
                <p>Concluída</p>
            </div>
        ),
        pendente: (
            <div className="flex gap-2 items-center text-warning">
                <CheckCircle />
                <p>Pendente</p>
            </div>
        ),
        cancelada: (
            <div className="flex gap-2 items-center text-destructive">
                <CheckCircle />
                <p>Cancelada</p>
            </div>
        ),
    }

    return possibleStatus[status]
}
