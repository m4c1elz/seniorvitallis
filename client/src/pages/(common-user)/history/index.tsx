import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { Contract } from "./types"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function History() {
    const { data: contracts, isPending } = useQuery({
        queryKey: ["get-current-professionals"],
        queryFn: async () => {
            const response = await api.get("/common-user/professionals/history")
            return response.data as Contract[]
        },
    })

    if (isPending) return <div>Carregando...</div>

    if (contracts) {
        return (
            <div className="space-y-4 m-auto">
                <h1 className="text-2xl font-bold">
                    Profissionais Solicitados
                </h1>
                <form className="flex flex-col space-y-2">
                    <h2 className="text-xl">Filtrar por</h2>
                    <div className="flex gap-2 items-center">
                        <Select>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Todos" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="todos">Todos</SelectItem>
                                <SelectItem value="concluida">
                                    Concluída
                                </SelectItem>
                                <SelectItem value="pendente">
                                    Pendente
                                </SelectItem>
                                <SelectItem value="cancelada">
                                    Cancelada
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            type="text"
                            placeholder="Pesquise um profissional..."
                            className="w-[500px]"
                        />
                    </div>
                </form>
                <div className="space-y-4">
                    {contracts.map(contract => (
                        <Card
                            key={contract.usuarioProfissional.idProfissional}
                            className="px-4 py-3 flex justify-between items-center"
                        >
                            <div>
                                <h3>{contract.usuarioProfissional.nome}</h3>
                                <div className="flex gap-2 items-center">
                                    <CalendarDays />
                                    <p>
                                        Solicitado em{" "}
                                        {new Date(
                                            contract.dataContratacao,
                                        ).toLocaleDateString("pt-br")}
                                    </p>
                                </div>
                                {/* todo */}
                                <p>{contract.statusContratacao}</p>
                            </div>
                            <div className="h-32 aspect-square border border-accent bg-gray-200 grid place-content-center rounded">
                                <img
                                    src=""
                                    alt={`Imagem de ${contract.usuarioProfissional.nome}`}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}
