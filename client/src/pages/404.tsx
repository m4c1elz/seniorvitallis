import { Sidebar } from "@/components/sidebar"
import { Tabs } from "@/components/tabs"
import { Link } from "@/router"
import { Contact, MessageCircle, Settings, History } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex">
            <Sidebar.Root>
                <Sidebar.Navigation>
                    <Sidebar.Option to="/history" icon={History}>
                        Histórico
                    </Sidebar.Option>
                    <Sidebar.Option to="/professionals" icon={Contact}>
                        Profissionais
                    </Sidebar.Option>
                    <Sidebar.Option to="/messages" icon={MessageCircle}>
                        Mensagens
                    </Sidebar.Option>
                </Sidebar.Navigation>
                <Sidebar.Footer>
                    <Sidebar.Option to="/options" icon={Settings}>
                        Opções
                    </Sidebar.Option>
                </Sidebar.Footer>
            </Sidebar.Root>
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
