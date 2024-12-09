import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function requests(req: Request, res: Response) {
    const requests = await prisma.contratacao.findMany({
        where: {
            fkProfissionalId: { equals: req.user.id },
            statusContratacao: "pendente",
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

    res.json(requests)
}
