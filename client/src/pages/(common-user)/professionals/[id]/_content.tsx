import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Availability } from "../_partials/availability"
import { IndividualProfessionalResponse } from "./types"
import { Stars } from "./_partials/stars"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "@/router"
import { api } from "@/lib/api"
import { LoaderCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { AxiosError } from "axios"

interface ProfessionalContentProps extends IndividualProfessionalResponse {}

export function ProfessionalContent({
    descricao,
    disponibilidade,
    nome,
    especialidade,
    notaMedia,
}: ProfessionalContentProps) {
    const { id } = useParams("/professionals/:id")
    const { toast } = useToast()
    const queryClient = useQueryClient()

    const { mutateAsync: createRequest, isPending } = useMutation({
        mutationKey: ["create-request", { professionalId: Number(id) }],
        mutationFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            await api.post(`/common-user/professionals/${id}/contracts`)
        },
        onSuccess: () => {
            toast({
                title: "Sucesso!",
                description: "Contratação solicitada com sucesso.",
            })
            queryClient.invalidateQueries({
                queryKey: ["get-current-professionals"],
            })
        },
        onError: (err: AxiosError) => {
            if (err.status == 400) {
                toast({
                    title: "Profissional já solicitado",
                    description:
                        "Você já pediu uma contratação deste profissional.",
                })
            }
        },
    })

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-4">
                    <h3>{nome}</h3>
                    <Availability availability={disponibilidade} />
                    <Button
                        className="w-min"
                        disabled={isPending}
                        onClick={() => createRequest()}
                    >
                        {isPending ? (
                            <>
                                <LoaderCircle className="animate-spin" />{" "}
                                Solicitando...
                            </>
                        ) : (
                            "Contratar"
                        )}
                    </Button>
                </div>
                <Avatar className="border-accent h-48 w-48 border-2">
                    <AvatarFallback className="bg-zinc-200" />
                </Avatar>
            </div>
            <div className="space-y-4">
                <h4>Avaliação</h4>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Stars reviewCount={notaMedia} />
                    </div>
                    <h5>
                        {notaMedia ? notaMedia.toFixed(1) : "Indisponível."}
                    </h5>
                </div>
            </div>
            <div className="space-y-4">
                <h4>Descrição</h4>
                <p>{descricao}</p>
            </div>
            <div className="space-y-4">
                <h4>Especialidade</h4>
                <p>{especialidade}</p>
            </div>
        </div>
    )
}
