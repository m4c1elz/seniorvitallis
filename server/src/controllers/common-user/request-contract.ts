import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function requestContract(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params

    if (isNaN(Number(id))) {
        res.sendStatus(404)
        return
    }

    const contractExists = await prisma.contratacao.findFirst({
        where: {
            fkProfissionalId: Number(id),
            fkUsuarioComumId: req.user.id,
        },
    })

    if (contractExists) {
        res.sendStatus(400)
        return
    }

    await prisma.contratacao.create({
        data: {
            statusContratacao: "pendente",
            dataContratacao: new Date(),
            prazoContratacao: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            precoContratacao: null,
            fkProfissionalId: Number(id),
            fkUsuarioComumId: req.user.id,
        },
    })

    res.sendStatus(201)
}
