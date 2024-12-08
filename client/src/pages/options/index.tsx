import { AppSidebar } from "@/components/app-sidebar"

export default function Options() {
    return (
        <div className="flex">
            <AppSidebar />
            <div className="mx-auto my-12 h-screen w-11/12 space-y-4 overflow-auto pb-16 md:w-3/5">
                <h3>Opções</h3>
                {/* todo */}
            </div>
        </div>
    )
}
