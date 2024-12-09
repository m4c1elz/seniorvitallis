import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function getAvailableProfessionals(
    req: Request<{}, {}, {}, { page: string; search: string }>,
    res: Response,
) {
    let { page, search } = req.query

    if (isNaN(Number(page))) {
        page = "1"
    }

    const professionalPage = Number(page)
    const limit = 8

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
        where: {
            disponibilidade: "disponivel",
            nome: {
                contains: search,
            },
        },
        take: limit,
        skip: (professionalPage - 1) * limit,
    })

    res.json(professionals)
}
