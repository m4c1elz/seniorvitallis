import { History, Contact, MessageCircle, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"

export function Sidebar() {
    return (
        <aside className="bg-primary hidden h-screen w-72 flex-col items-center justify-between border-r border-black/20 px-3 py-4 md:flex">
            <img src="/sidebar-logo.png" alt="SêniorVitallis Logo" />
            <nav className="flex w-full flex-col items-start gap-4">
                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 ${isActive && "text-accent"}`
                    }
                >
                    <History />
                    <p className="text-xl font-medium">Histórico</p>
                </NavLink>
                <NavLink
                    to="/professionals"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 ${isActive && "text-accent"}`
                    }
                >
                    <Contact />
                    <p className="text-xl font-medium">Profissionais</p>
                </NavLink>
                <NavLink
                    to="/messages"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-2 py-1 ${isActive && "text-accent"}`
                    }
                >
                    <MessageCircle />
                    <p className="text-xl font-medium">Mensagens</p>
                </NavLink>
            </nav>
            <div className="flex w-full items-start">
                <div className="flex items-center gap-2 px-2 py-1">
                    <Settings />
                    <p className="text-xl font-medium">Configurações</p>
                </div>
            </div>
        </aside>
    )
}
