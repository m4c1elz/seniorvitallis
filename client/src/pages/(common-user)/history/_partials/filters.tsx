import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useFilters } from "./filters.hooks"

export function HistoryFilters() {
    const { selectedStatus, setSelectedStatus, setSearch, search } =
        useFilters()

    return (
        <form className="flex flex-col space-y-2">
            <h2 className="text-xl">Filtrar por</h2>
            <div className="flex flex-col items-start gap-2 px-2 sm:flex-row sm:items-center sm:px-0">
                <Select
                    defaultValue={selectedStatus}
                    onValueChange={value => setSelectedStatus(value)}
                >
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="concluida">Concluída</SelectItem>
                        <SelectItem value="pendente">Pendente</SelectItem>
                        <SelectItem value="cancelada">Cancelada</SelectItem>
                    </SelectContent>
                </Select>
                <Input
                    type="text"
                    placeholder="Pesquise um profissional..."
                    className="w-full md:w-[500px]"
                    defaultValue={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        </form>
    )
}
