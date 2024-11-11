import { CheckCircle, XCircle } from "lucide-react"

interface AvailabilityProps {
    availability: "disponivel" | "indisponivel"
}

export function Availability({ availability }: AvailabilityProps) {
    const possibleValues = {
        disponivel: (
            <div className="flex gap-2 items-center justify-center text-accent">
                <CheckCircle />
                <p>Disponível</p>
            </div>
        ),
        indisponivel: (
            <div className="flex gap-2 items-center justify-center text-destructive">
                <XCircle />
                <p>Não Disponível</p>
            </div>
        ),
    }

    return possibleValues[availability]
}
