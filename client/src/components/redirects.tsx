import { Navigate, useLocation } from "react-router-dom"

import { useAuth } from "@/providers/auth-provider"
import { Path } from "@/router"
import { PropsWithChildren } from "react"
import { isUserCommon } from "@/helpers/is-user-common"
import { isUserProfessional } from "@/helpers/is-user-professional"

const PRIVATE: Path[] = [
    "/history",
    "/professionals",
    "/professionals/:id",
    "/requests",
]
const PUBLIC: Path[] = ["/login"]

const COMMON_ROUTES: Path[] = [
    "/history",
    "/professionals",
    "/professionals/:id",
]
const PROFESSIONAL_ROUTES: Path[] = ["/requests"]

interface RedirectsProps extends PropsWithChildren {}

export function Redirects({ children }: RedirectsProps) {
    const { isAuth, user } = useAuth()
    const { pathname } = useLocation()

    if (pathname == "/") return <Navigate to="/login" />

    const authenticatedOnPublicPath =
        isAuth && PUBLIC.includes(pathname as Path)
    const unAuthenticatedOnPrivatePath =
        !isAuth && PRIVATE.includes(pathname as Path)

    const authenticatedOnPrivatePath =
        isAuth && PRIVATE.includes(pathname as Path)

    const authenticatedOnProfessionalRoute =
        isAuth && PROFESSIONAL_ROUTES.includes(pathname as Path)
    const authenticatedOnCommonRoute =
        isAuth && COMMON_ROUTES.includes(pathname as Path)

    if (authenticatedOnPublicPath) {
        console.log("authenticated on public path")
        if (isUserCommon(user)) {
            return <Navigate to="/history" replace />
        }

        if (isUserProfessional(user)) {
            return <Navigate to="/requests" />
        }
    }

    if (authenticatedOnPrivatePath) {
        console.log("auth in private path.")
        if (isUserCommon(user) && authenticatedOnProfessionalRoute) {
            console.log("user is professional.")
            return <Navigate to="/history" replace />
        }

        if (isUserProfessional(user) && authenticatedOnCommonRoute) {
            console.log("user is professional.")
            return <Navigate to="/requests" replace />
        }
    }

    if (unAuthenticatedOnPrivatePath) return <Navigate to="/login" replace />
    console.log("unauthenticated")

    return children
}
