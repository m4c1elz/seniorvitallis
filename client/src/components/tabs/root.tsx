import { PropsWithChildren } from "react"

interface RootProps extends PropsWithChildren {}

export function Root({ children }: RootProps) {
    return (
        <nav className="bg-primary fixed bottom-0 flex w-screen items-center justify-evenly rounded-t-lg border border-black/20 px-4 py-2 text-xs font-medium md:hidden">
            {children}
        </nav>
    )
}
