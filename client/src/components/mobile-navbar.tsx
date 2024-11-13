import { History, Contact, MessageCircle, Settings } from "lucide-react"

export function MobileNavbar() {
    return (
        <nav className="absolute bottom-0 flex h-16 w-screen items-center justify-between px-4 py-2">
            <div className="flex flex-col items-center gap-2">
                <History />
                <p>Histórico</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Contact />
                <p>Profissionais</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <MessageCircle />
                <p>Mensagens</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Settings />
                <p>Configurações</p>
            </div>
        </nav>
    )
}
