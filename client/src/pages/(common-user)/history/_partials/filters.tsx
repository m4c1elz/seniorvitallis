import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function HistoryFilters() {
    return (
        <form className="flex flex-col space-y-2">
            <h2 className="text-xl">Filtrar por</h2>
            <div className="flex gap-2 items-center">
                <Select>
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
                    className="w-[500px]"
                />
            </div>
        </form>
    )
}
