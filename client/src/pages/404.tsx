import { Sidebar } from "@/components/sidebar"
import { Tabs } from "@/components/tabs"
import { Link } from "@/router"

export default function NotFound() {
    return (
        <div className="flex">
            <Sidebar />
            <Tabs />
            <div className="m-auto space-y-4 py-16 text-center md:py-0">
                <h1 className="text-destructive">Erro 404</h1>
                <h3>Essa página não existe.</h3>
                <Link to="/history" className="text-accent underline">
                    Voltar ao início
                </Link>
            </div>
        </div>
    )
}
