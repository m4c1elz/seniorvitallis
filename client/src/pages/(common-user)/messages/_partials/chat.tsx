import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChatList } from "../types"

type ChatProps = ChatList[number]

export function Chat({ data, mensagem, usuario }: ChatProps) {
    return (
        <div className="bg-primary flex w-full cursor-pointer items-center justify-between border border-black/20 px-4 py-3 transition hover:bg-black/5">
            <div className="space-y-1.5">
                <h5>{usuario}</h5>
                <p className="text-black/50">{mensagem}</p>
                <p className="font-medium text-black/50">
                    {new Date(data).toLocaleTimeString("pt-br", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>
            <Avatar className="border-accent border-2">
                <AvatarFallback className="bg-zinc-200" />
            </Avatar>
        </div>
    )
}
