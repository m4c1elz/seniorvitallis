import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { ChatList } from "./types"
import { MessagesContent } from "./_content"
import { useAuth } from "@/providers/auth-provider"
import { isUserCommon } from "@/helpers/is-user-common"
import { isUserProfessional } from "@/helpers/is-user-professional"

export default function Messages() {
    const { user } = useAuth()

    const { data: chats, isPending } = useQuery({
        queryKey: ["get-messages"],
        queryFn: async () => {
            if (isUserCommon(user)) {
                const response = await api.get("/common-user/messages")
                return response.data as ChatList
            } else if (isUserProfessional(user)) {
                const response = await api.get("/professional-user/messages")
                return response.data as ChatList
            }
        },
    })

    if (isPending) return <div>Loading...</div>
    if (chats) return <MessagesContent chats={chats} />
}
