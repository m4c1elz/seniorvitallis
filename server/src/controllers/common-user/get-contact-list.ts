import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function getContactList(req: Request, res: Response) {
    const messages = await prisma.chat.findMany({
        where: {
            usuarioComumId: req.user.id,
        },
        select: {
            idChat: true,
            usuarioProfissional: {
                select: {
                    nome: true,
                },
            },
            mensagem: {
                select: {
                    idMensagem: true,
                    conteudo: true,
                    dataEnvio: true,
                },
                take: 1,
                orderBy: {
                    dataEnvio: "desc",
                },
            },
        },
    })

    const result = messages.map(message => ({
        idChat: message.idChat,
        usuario: message.usuarioProfissional.nome,
        mensagem: message.mensagem[0].conteudo,
        data: message.mensagem[0].dataEnvio,
    }))

    res.json(result)
}
