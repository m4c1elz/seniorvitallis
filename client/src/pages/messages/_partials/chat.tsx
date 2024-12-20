import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChatList } from "../types"

type ChatProps = ChatList[number]

export function Chat({ data, mensagem, usuario }: ChatProps) {
    return (
        <div className="transition flex w-full justify-between items-center bg-primary px-4 py-3 border border-black/20 cursor-pointer hover:bg-black/5">
            <div className="space-y-1.5">
                <h5>{usuario}</h5>
                <p className="text-black/50">{mensagem}</p>
                <p className="text-black/50 font-medium">
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
