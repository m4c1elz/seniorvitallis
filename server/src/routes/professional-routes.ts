import { prisma } from "@/lib/prisma"
import { Router } from "express"

const router = Router()

router.get("/professionals", async (req, res) => {
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
})

export const professionalsRoutes = router
