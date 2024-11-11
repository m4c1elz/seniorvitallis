import { CheckCircle } from "lucide-react"

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
                <CheckCircle />
                <p>Não Disponível</p>
            </div>
        ),
    }

    return possibleValues[availability]
}
