import { Contract } from "./types"
import { Contract as ContractComponent } from "./_partials/contract"

interface HistoryContentProps {
    contracts: Contract[]
}

export function HistoryContent({ contracts }: HistoryContentProps) {
    if (contracts.length == 0) {
        return <h4>Não há profissionais solicitados.</h4>
    }

    return (
        <div className="space-y-4">
            {contracts.map(contract => (
                <ContractComponent {...contract} />
            ))}
        </div>
    )
}
