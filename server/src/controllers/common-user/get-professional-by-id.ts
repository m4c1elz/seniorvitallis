import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"

export async function getProfessionalById(
    req: Request<{ id: string }>,
    res: Response,
) {
    const id = Number(req.params.id)

    const avaliacoes = await prisma.avaliacao.findMany({
        where: {
            profissionalId: id,
        },
        select: {
            nota: true,
        },
    })

    const notas = avaliacoes.map(({ nota }) => nota)

    let somaDasNotas = 0
    for (const nota of notas) {
        somaDasNotas += nota
    }

    const notaMedia = Math.floor(somaDasNotas / notas.length)

    const profissional = await prisma.usuarioProfissional.findFirst({
        where: { idProfissional: id },
        select: {
            nome: true,
            descricao: true,
            disponibilidade: true,
            especialidade: true,
        },
    })

    if (!profissional) {
        res.status(404).json({
            msg: "Esse profissional não existe.",
        })
        return
    }

    res.json({ ...profissional, notaMedia })
}
