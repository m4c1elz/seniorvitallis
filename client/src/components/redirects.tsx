import { Navigate, useLocation } from "react-router-dom"

import { useAuth } from "@/providers/auth-provider"
import { Path } from "@/router"
import { PropsWithChildren } from "react"

const PRIVATE: Path[] = [
    "/history",
    "/professionals",
    "/professionals/:id",
    "/requests",
]
const PUBLIC: Path[] = ["/login"]

interface RedirectsProps extends PropsWithChildren {}

export function Redirects({ children }: RedirectsProps) {
    const { isAuth } = useAuth()
    const { pathname } = useLocation()

    if (pathname == "/") return <Navigate to="/login" />

    const authenticatedOnPublicPath =
        isAuth && PUBLIC.includes(pathname as Path)
    const unAuthenticatedOnPrivatePath =
        !isAuth && PRIVATE.includes(pathname as Path)

    if (authenticatedOnPublicPath) return <Navigate to="/history" replace />
    if (unAuthenticatedOnPrivatePath) return <Navigate to="/login" replace />

    return children
}
