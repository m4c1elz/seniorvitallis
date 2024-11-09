import { useDebounce } from "@/hooks/use-debounce"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export function useFilters() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get("search") ?? "")
    const [selectedStatus, setSelectedStatus] = useState(
        searchParams.get("status") ?? "todos",
    )

    const debouncedSearch = useDebounce(search, 300)

    useEffect(() => {
        searchParams.set("status", selectedStatus)
        searchParams.set("search", debouncedSearch)
        if (search.length === 0) {
            searchParams.delete("search")
        }
        if (selectedStatus === "todos") {
            searchParams.delete("status")
        }
        setSearchParams(searchParams)
    }, [selectedStatus, debouncedSearch])

    return {
        selectedStatus,
        setSelectedStatus,
        search,
        setSearch,
    }
}
