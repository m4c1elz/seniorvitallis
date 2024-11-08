import { prisma } from "@/lib/prisma"
import { verifyToken } from "@/middlewares/verify-token"
import { Router } from "express"

const router = Router()

router.get("/professionals", verifyToken, async (req, res) => {
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
