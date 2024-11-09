import { Request, Response } from "express"
import { prisma } from "@/lib/prisma"
import { $Enums } from "@prisma/client"

interface HiringFilters {
    page?: string
    search?: string
    status?: $Enums.Status
}

export async function getHirings(
    req: Request<{}, {}, {}, HiringFilters>,
    res: Response,
) {
    const { page, search, status } = req.query

    let hiringsPage: number
    if (isNaN(Number(page))) {
        hiringsPage = 1
    } else {
        hiringsPage = Number(page)
    }

    const hirings = await prisma.contratacao.findMany({
        select: {
            usuarioProfissional: {
                select: {
                    idProfissional: true,
                    nome: true,
                },
            },
            dataContratacao: true,
            prazoContratacao: true,
            statusContratacao: true,
        },
        where: {
            usuarioProfissional: {
                nome: {
                    contains: search,
                },
            },
            usuarioComum: {
                idUsuarioComum: req.user.id,
            },
            statusContratacao: status,
        },
        take: 8,
        skip: (hiringsPage - 1) * 8,
    })

    res.json(hirings)
}
