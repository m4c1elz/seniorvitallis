import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <main className="h-screen flex justify-center items-center">
            <Outlet />
        </main>
    )
}
