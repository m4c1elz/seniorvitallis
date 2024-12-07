import { PropsWithChildren } from "react"

interface RootProps extends PropsWithChildren {}

export function Root({ children }: RootProps) {
    return (
        <aside className="bg-primary hidden h-screen w-72 flex-col items-center justify-between border-r border-black/20 px-3 py-4 md:flex">
            <img src="/sidebar-logo.png" alt="SêniorVitallis Logo" />
            {children}
        </aside>
    )
}
