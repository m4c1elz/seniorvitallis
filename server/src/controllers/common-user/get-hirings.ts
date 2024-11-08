import { Request, Response } from "express"
import { prisma } from "@/lib/prisma"

export async function getHirings(req: Request, res: Response) {
    const hirings = await prisma.contratacao.findMany({
        select: {
            dataContratacao: true,
            prazoContratacao: true,
            precoContratacao: true,
            usuarioProfissional: true,
        },
        where: {
            usuarioComum: {
                idUsuarioComum: req.user.id,
            },
        },
    })

    res.json(hirings)
}
