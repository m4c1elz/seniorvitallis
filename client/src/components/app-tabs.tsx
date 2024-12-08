import { isUserCommon } from "@/helpers/is-user-common"
import { Tabs } from "./tabs"
import { isUserProfessional } from "@/helpers/is-user-professional"
import { useAuth } from "@/providers/auth-provider"
import { Contact, MessageCircle, Settings, History } from "lucide-react"

function UserTabs() {
    const { user } = useAuth()

    if (isUserCommon(user)) {
        return (
            <>
                <Tabs.Option to="/history" icon={History}>
                    Histórico
                </Tabs.Option>
                <Tabs.Option to="/professionals" icon={Contact}>
                    Profissionais
                </Tabs.Option>
                <Tabs.Option to="/messages" icon={MessageCircle}>
                    Mensagens
                </Tabs.Option>
            </>
        )
    }

    if (isUserProfessional(user)) {
        return (
            <>
                <Tabs.Option to="/requests" icon={History}>
                    Contratações
                </Tabs.Option>
                <Tabs.Option to="/my-clients" icon={Contact}>
                    Meus clientes
                </Tabs.Option>
                <Tabs.Option to="/messages" icon={MessageCircle}>
                    Mensagens
                </Tabs.Option>
            </>
        )
    }
}

export function AppTabs() {
    return (
        <Tabs.Root>
            <UserTabs />
            <Tabs.Option to="/options" icon={Settings}>
                Opções
            </Tabs.Option>
        </Tabs.Root>
    )
}
