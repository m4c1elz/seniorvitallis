import { PropsWithChildren } from "react"

interface FooterProps extends PropsWithChildren {}

export function Footer({ children }: FooterProps) {
    return <div className="flex w-full items-start">{children}</div>
}
