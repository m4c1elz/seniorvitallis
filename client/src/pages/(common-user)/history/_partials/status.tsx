import { type Contract } from "../types"
import { CheckCircle, XCircle } from "lucide-react"

interface ContractStatusProps {
    status: Contract["statusContratacao"]
}

export function ContractStatus({ status }: ContractStatusProps) {
    const possibleStatus = {
        concluida: (
            <div className="text-accent flex items-center gap-2">
                <CheckCircle />
                <p>Concluída</p>
            </div>
        ),
        pendente: (
            <div className="text-warning flex items-center gap-2">
                <CheckCircle />
                <p>Pendente</p>
            </div>
        ),
        cancelada: (
            <div className="text-destructive flex items-center gap-2">
                <XCircle />
                <p>Cancelada</p>
            </div>
        ),
    }

    return possibleStatus[status]
}
