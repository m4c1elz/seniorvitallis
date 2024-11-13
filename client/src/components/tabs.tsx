import { History, Contact, MessageCircle, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"

export function Tabs() {
    return (
        <nav className="bg-primary absolute bottom-0 flex w-screen items-center justify-evenly rounded-t-lg border border-black/20 px-4 py-2 text-xs font-medium sm:hidden">
            <NavLink
                to="/history"
                className={({ isActive }) =>
                    `flex flex-col items-center gap-1 ${isActive && "text-accent"}`
                }
            >
                <History />
                <p>Histórico</p>
            </NavLink>
            <NavLink
                to="/professionals"
                className={({ isActive }) =>
                    `flex flex-col items-center gap-1 ${isActive && "text-accent"}`
                }
            >
                <Contact />
                <p>Profissionais</p>
            </NavLink>
            <NavLink
                to="/messages"
                className={({ isActive }) =>
                    `flex flex-col items-center gap-1 ${isActive && "text-accent"}`
                }
            >
                <MessageCircle />
                <p>Mensagens</p>
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    `flex flex-col items-center gap-1 ${isActive && "text-accent"}`
                }
            >
                <History />
                <p>Histórico</p>
            </NavLink>
        </nav>
    )
}
