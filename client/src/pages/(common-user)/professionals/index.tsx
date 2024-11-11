import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Professional } from "./types"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/router"
import { Availability } from "./_partials/availability"

export default function Professionals() {
    const { data: professionals, isPending } = useQuery({
        queryKey: ["get-professionals"],
        queryFn: async () => {
            const response = await api.get("/common-user/professionals")
            return response.data as Professional[]
        },
    })

    if (isPending) return <div>Carregando...</div>
    if (professionals)
        return (
            <>
                <h1 className="text-2xl font-bold">Profissionais</h1>
                <div className="grid grid-rows-2 grid-cols-4 gap-4">
                    {professionals.map(professional => (
                        <Card className="grid place-content-center py-3 px-4">
                            <Link
                                to="/professionals/:id"
                                params={{
                                    id: String(professional.idProfissional),
                                }}
                                key={professional.idProfissional}
                            >
                                <CardContent className="flex flex-col justify-center items-center gap-4">
                                    <div className="h-32 aspect-square border border-accent bg-gray-200 grid place-content-center rounded">
                                        <img
                                            src=""
                                            alt={`${professional.nome}`}
                                            className="text-center"
                                        />
                                    </div>
                                    <div className="space-y-1 text-center">
                                        <h1 className="text-xl font-bold">
                                            {professional.nome}
                                        </h1>
                                        <p className="text-sm">
                                            {professional.especialidade}
                                        </p>
                                        <Availability
                                            availability={
                                                professional.disponibilidade
                                            }
                                        />
                                    </div>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            </>
        )
}
