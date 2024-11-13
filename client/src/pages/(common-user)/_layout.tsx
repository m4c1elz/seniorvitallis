import { Sidebar } from "@/components/sidebar"
import { Tabs } from "@/components/tabs"
import { Outlet } from "react-router-dom"

export default function CommonUserLayout() {
    return (
        <main className="flex">
            <Sidebar />
            <Tabs />
            <div className="mx-auto my-12 w-11/12 space-y-4 md:w-3/5">
                <Outlet />
            </div>
        </main>
    )
}
