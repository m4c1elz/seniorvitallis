import { Input } from "@/components/ui/input"
import { useProfessionalFilters } from "./filters.hooks"

export function Filters() {
    const { search, setSearch } = useProfessionalFilters()

    return (
        <div className="px-2">
            <Input
                type="text"
                placeholder="Procure um profissional."
                defaultValue={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}
