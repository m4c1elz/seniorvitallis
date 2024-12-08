import { AppSidebar } from "@/components/app-sidebar"
import { Tabs } from "@/components/tabs"
import { Outlet } from "react-router-dom"

export default function CommonUserLayout() {
    return (
        <main className="flex">
            <AppSidebar />
            <Tabs />
            <div className="mx-auto my-12 h-screen w-11/12 space-y-4 overflow-auto pb-16 md:w-3/5">
                <Outlet />
            </div>
        </main>
    )
}
