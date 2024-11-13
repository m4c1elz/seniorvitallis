import { Sidebar } from "@/components/sidebar"
import { Link } from "@/router"

export default function NotFound() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="m-auto text-center space-y-4">
                <h1 className="text-destructive">Erro 404</h1>
                <h3>Essa página não existe.</h3>
                <Link to="/history" className="underline text-accent">
                    Voltar ao início
                </Link>
            </div>
        </div>
    )
}
