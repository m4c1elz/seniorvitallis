import { MobileNavbar } from "@/components/mobile-navbar"
import { Sidebar } from "@/components/sidebar"
import { Outlet } from "react-router-dom"

export default function CommonUserLayout() {
    return (
        <main className="flex">
            <Sidebar />
            <MobileNavbar />
            <div className="mx-auto my-12 w-3/5 space-y-4">
                <Outlet />
            </div>
        </main>
    )
}
