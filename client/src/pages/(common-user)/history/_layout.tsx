import { Outlet } from "react-router-dom"
import { HistoryFilters } from "./_partials/filters"

export default function HistoryLayout() {
    return (
        <div className="space-y-4 mx-auto my-12">
            <h1 className="text-2xl font-bold">Profissionais Solicitados</h1>
            <HistoryFilters />
            <Outlet />
        </div>
    )
}
