import { History, Contact, MessageCircle, Settings } from "lucide-react"

export function Sidebar() {
    return (
        <aside className="h-screen w-72 bg-primary border-r border-black/20 flex flex-col justify-between items-center py-4 px-3">
            <h1>SêniorVitallis</h1>
            <nav className="flex flex-col gap-4 items-start w-full">
                <div className="flex gap-2 items-center px-2 py-1">
                    <History />
                    <p className="text-xl font-medium">Histórico</p>
                </div>
                <div className="flex gap-2 items-center px-2 py-1">
                    <Contact />
                    <p className="text-xl font-medium">Profissionais</p>
                </div>
                <div className="flex gap-2 items-center px-2 py-1">
                    <MessageCircle />
                    <p className="text-xl font-medium">Mensagens</p>
                </div>
            </nav>
            <div className="flex items-start w-full">
                <div className="flex gap-2 items-center px-2 py-1">
                    <Settings />
                    <p className="text-xl font-medium">Configurações</p>
                </div>
            </div>
        </aside>
    )
}
