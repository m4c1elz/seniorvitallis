import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function getClients(req: Request, res: Response) {
    const clients = await prisma.contratacao.findMany({
        where: {
            fkProfissionalId: { equals: req.user.id },
            statusContratacao: "concluida",
        },
        select: {
            idContratacao: true,
            dataContratacao: true,
            prazoContratacao: true,
            precoContratacao: true,
            statusContratacao: true,
            usuarioComum: {
                select: {
                    nome: true,
                },
            },
        },
    })

    res.json(clients)
}
