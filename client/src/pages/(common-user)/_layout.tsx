import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export default function CommonUserLayout() {
    return (
        <main className="flex">
            <Sidebar />
            <div className="space-y-4 w-3/5 mx-auto my-12">
                <Outlet />
            </div>
        </main>
    )
}
