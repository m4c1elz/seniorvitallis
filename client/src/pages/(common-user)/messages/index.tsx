import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { ChatList } from "./types"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Messages() {
    const { data: chats, isPending } = useQuery({
        queryKey: ["get-messages"],
        queryFn: async () => {
            const response = await api.get("/common-user/messages")
            return response.data as ChatList
        },
    })

    if (isPending) return <div>Loading...</div>
    if (chats) {
        return (
            <>
                <h3>Mensagens</h3>
                <section className="space-y-4">
                    {chats.map(chat => (
                        <div className="flex w-full justify-between items-center bg-primary px-4 py-3 border border-black/20">
                            <div className="space-y-1.5">
                                <h5>{chat.usuario}</h5>
                                <p className="text-black/50">{chat.mensagem}</p>
                                <p className="text-black/50 font-medium">
                                    {new Date(chat.data).toLocaleTimeString(
                                        "pt-br",
                                        {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        },
                                    )}
                                </p>
                            </div>
                            <Avatar className="border-accent border-2">
                                <AvatarFallback className="bg-zinc-200" />
                            </Avatar>
                        </div>
                    ))}
                </section>
            </>
        )
    }
}
