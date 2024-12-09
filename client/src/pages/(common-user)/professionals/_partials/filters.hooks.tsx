import { useDebounce } from "@/hooks/use-debounce"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export function useProfessionalFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    const defaultSearchValue = searchParams.get("search") ?? ""

    const [search, setSearch] = useState(defaultSearchValue)
    const debouncedSearch = useDebounce(search, 200)

    useEffect(() => {
        setSearchParams(params => {
            if (search.length > 0) {
                params.set("search", debouncedSearch)
            } else {
                params.delete("search")
            }

            return params
        })
    }, [debouncedSearch])

    return {
        search,
        setSearch,
        debouncedSearch,
    }
}
