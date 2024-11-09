import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function getAuthUser(req: Request, res: Response) {
    const { id } = req.user

    const user = await prisma.usuarioComum.findFirst({
        where: { idUsuarioComum: id },
        select: {
            idUsuarioComum: true,
            email: true,
            senhaUsuario: true,
            nome: true,
            telefoneCelular: true,
            endereco: true,
        },
    })

    if (!user) {
        res.sendStatus(404)
        return
    }

    res.json(user)
}
