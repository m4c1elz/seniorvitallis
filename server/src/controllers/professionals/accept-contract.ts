import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function acceptContract(
    req: Request<{ id: string }, {}, { price: number }>,
    res: Response,
) {
    const { price } = req.body
    const { id } = req.params

    if (isNaN(Number(id))) {
        res.sendStatus(400)
        return
    }

    await prisma.contratacao.update({
        where: {
            idContratacao: Number(id),
        },
        data: {
            statusContratacao: "concluida",
            precoContratacao: price,
        },
    })

    res.sendStatus(200)
}
