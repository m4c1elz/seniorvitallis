import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function rejectContact(
    req: Request<{ id: string }>,
    res: Response,
) {
    const { id } = req.params

    if (isNaN(Number(id))) {
        res.sendStatus(404)
        return
    }

    await prisma.contratacao.update({
        where: { idContratacao: Number(id) },
        data: {
            statusContratacao: "cancelada",
        },
    })

    res.sendStatus(200)
}
