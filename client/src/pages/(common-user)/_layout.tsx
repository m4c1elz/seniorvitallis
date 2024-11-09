import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export default function CommonUserLayout() {
    return (
        <main className="flex">
            <Sidebar />
            <Outlet />
        </main>
    )
}
