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
            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {professionals.map(professional => (
                    <ProfessionalComponent
                        key={professional.idProfissional}
                        {...professional}
                    />
                ))}
            </div>
        </>
    )
}
