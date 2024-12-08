import { LucideIcon } from "lucide-react"
import { PropsWithChildren } from "react"
import { NavLink, NavLinkProps } from "react-router-dom"

interface OptionProps extends PropsWithChildren<NavLinkProps> {
    icon: LucideIcon
}

export function Option({ children, icon: Icon, ...props }: OptionProps) {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${isActive && "text-accent"}`
            }
        >
            <Icon />
            {children}
        </NavLink>
    )
}
