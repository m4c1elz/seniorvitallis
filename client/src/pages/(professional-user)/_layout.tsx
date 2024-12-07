import { Sidebar } from "@/components/sidebar"
import { Tabs } from "@/components/tabs"
import { Contact, History, MessageCircle, Settings } from "lucide-react"
import { Outlet } from "react-router-dom"

export default function ProfessionalUserLayout() {
    return (
        <main className="flex">
            <Sidebar.Root>
                <Sidebar.Navigation>
                    <Sidebar.Option to="/requests" icon={History}>
                        Contratações
                    </Sidebar.Option>
                    <Sidebar.Option to="/my-clients" icon={Contact}>
                        Meus clientes
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
            <div className="mx-auto my-12 h-screen w-11/12 space-y-4 overflow-auto pb-16 md:w-3/5">
                <Outlet />
            </div>
        </main>
    )
}
