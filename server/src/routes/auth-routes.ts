import { prisma } from "@/lib/prisma"
import { Router } from "express"
import jwt from "jsonwebtoken"

const router = Router()

interface LoginRequest {
    email: string
    password: string
}

router.get("/auth/common-user/login", async (req, res) => {
    const { email, password } = req.body as LoginRequest

    const requestedUser = await prisma.usuarioComum.findFirst({
        where: { email },
    })

    if (!requestedUser) {
        res.status(404).json({ msg: "O usuário não existe." })
    }

    if (requestedUser?.senhaUsuario !== password) {
        res.status(403).json({ msg: "Senha incorreta." })
    }

    // const token = jwt.sign({
    //     name: requestedUser?.nome,
    //     email,
    // })
})

export const authRoutes = router
