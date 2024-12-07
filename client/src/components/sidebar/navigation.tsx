import { PropsWithChildren } from "react"

interface NavigationProps extends PropsWithChildren {}

export function Navigation({ children }: NavigationProps) {
    return (
        <nav className="flex w-full flex-col items-start gap-4">{children}</nav>
    )
}
