import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { ChatList } from "./types"
import { MessagesContent } from "./_content"

export default function Messages() {
    const { data: chats, isPending } = useQuery({
        queryKey: ["get-messages"],
        queryFn: async () => {
            const response = await api.get("/common-user/messages")
            return response.data as ChatList
        },
    })

    if (isPending) return <div>Loading...</div>
    if (chats) return <MessagesContent chats={chats} />
}
