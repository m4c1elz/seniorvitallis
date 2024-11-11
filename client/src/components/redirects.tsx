// src/config/redirects.tsx

import { Navigate, useLocation } from "react-router-dom"

import { useAuth } from "@/providers/auth-provider"
import { Path } from "@/router"

const PRIVATE: Path[] = ["/history", "/professionals", "/professionals/:id"]
const PUBLIC: Path[] = ["/login"]

export const Redirects = ({ children }: { children: React.ReactNode }) => {
    const auth = useAuth()
    const location = useLocation()

    const authenticatedOnPublicPath =
        auth.isAuth && PUBLIC.includes(location.pathname as Path)
    const unAuthenticatedOnPrivatePath =
        !auth.isAuth && PRIVATE.includes(location.pathname as Path)

    if (authenticatedOnPublicPath) return <Navigate to="/history" replace />
    if (unAuthenticatedOnPrivatePath) return <Navigate to="/login" replace />

    return children
}
