import { Professional } from "./types"
import { ProfessionalComponent } from "./_partials/professional-component"

interface ProfessionalsContentProps {
    professionals: Professional[]
}

export function ProfessionalsContent({
    professionals,
}: ProfessionalsContentProps) {
    return (
        <>
            <h1 className="text-2xl font-bold">Profissionais</h1>
            <div className="grid grid-rows-2 grid-cols-4 gap-4">
                {professionals.map(professional => (
                    <ProfessionalComponent {...professional} />
                ))}
            </div>
        </>
    )
}
