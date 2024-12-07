import { PropsWithChildren } from "react"
import { LucideIcon } from "lucide-react"
import { NavLink, NavLinkProps } from "react-router-dom"

interface OptionProps extends PropsWithChildren<NavLinkProps> {
    icon: LucideIcon
}

export function Option({ children, icon: Icon, ...props }: OptionProps) {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 ${isActive && "text-accent"}`
            }
        >
            <Icon />
            <p className="text-xl font-medium">{children}</p>
        </NavLink>
    )
}
