import { isUserCommon } from "@/helpers/is-user-common"
import { isUserProfessional } from "@/helpers/is-user-professional"
import { useAuth } from "@/providers/auth-provider"
import { History, Contact, MessageCircle, Settings } from "lucide-react"
import { Sidebar } from "./sidebar"

function UserSidebarNavigation() {
    const { user } = useAuth()

    if (isUserCommon(user)) {
        return (
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
        )
    }

    if (isUserProfessional(user)) {
        return (
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
        )
    }
}

export function AppSidebar() {
    return (
        <Sidebar.Root>
            <UserSidebarNavigation />
            <Sidebar.Footer>
                <Sidebar.Option to="/options" icon={Settings}>
                    Opções
                </Sidebar.Option>
            </Sidebar.Footer>
        </Sidebar.Root>
    )
}
