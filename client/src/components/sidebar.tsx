import { History, Contact, MessageCircle, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"

export function Sidebar() {
    return (
        <aside className="h-screen w-72 bg-primary border-r border-black/20 flex flex-col justify-between items-center py-4 px-3">
            <img src="/sidebar-logo.png" alt="SêniorVitallis Logo" />
            <nav className="flex flex-col gap-4 items-start w-full">
                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-2 py-1 ${isActive && "text-accent"}`
                    }
                >
                    <History />
                    <p className="text-xl font-medium">Histórico</p>
                </NavLink>
                <NavLink
                    to="/professionals"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-2 py-1 ${isActive && "text-accent"}`
                    }
                >
                    <Contact />
                    <p className="text-xl font-medium">Profissionais</p>
                </NavLink>
                <NavLink
                    to="/messages"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-2 py-1 ${isActive && "text-accent"}`
                    }
                >
                    <MessageCircle />
                    <p className="text-xl font-medium">Mensagens</p>
                </NavLink>
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
