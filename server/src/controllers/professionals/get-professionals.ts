import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function getProfessionals(_req: Request, res: Response) {
    const professionals = await prisma.usuarioProfissional.findMany({
        orderBy: {
            nome: "asc",
        },
        select: {
            idProfissional: true,
            nome: true,
            email: true,
            descricao: true,
            telefoneCelular: true,
            disponibilidade: true,
            especialidade: true,
        },
    })

    res.json(professionals)
}
