import { CheckCircle, XCircle } from "lucide-react"

interface AvailabilityProps {
    availability: "disponivel" | "indisponivel"
}

export function Availability({ availability }: AvailabilityProps) {
    const possibleValues = {
        disponivel: (
            <div className="text-accent flex items-center gap-2">
                <CheckCircle />
                <p>Disponível</p>
            </div>
        ),
        indisponivel: (
            <div className="text-destructive flex items-center gap-2">
                <XCircle />
                <p>Não Disponível</p>
            </div>
        ),
    }

    return possibleValues[availability]
}
