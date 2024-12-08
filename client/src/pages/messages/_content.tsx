import { ChatList } from "./types"
import { Chat } from "./_partials/chat"

interface MessagesContentProps {
    chats: ChatList
}

export function MessagesContent({ chats }: MessagesContentProps) {
    return (
        <>
            <h3>Mensagens</h3>
            <section className="space-y-4">
                {chats.map(chat => (
                    <Chat key={chat.idChat} {...chat} />
                ))}
            </section>
        </>
    )
}
