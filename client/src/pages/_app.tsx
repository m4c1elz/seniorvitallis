import { Redirects } from "@/components/redirects"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <Redirects>
            <Outlet />
        </Redirects>
    )
}
