import { prisma } from "@/lib/prisma"
import { Request, Response } from "express"
import { env } from "@/env"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { UserPayload } from "@/types/user-payload"

const loginSchema = z.object({
    email: z.string().email("E-mail inválido."),
    password: z.string({
        message: "Senha inválida.",
    }),
})

export async function login(req: Request, res: Response) {
    const { email, password } = loginSchema.parse(req.body)

    const requestedUser = await prisma.usuarioComum.findFirst({
        where: { email },
        select: {
            idUsuarioComum: true,
            email: true,
            senhaUsuario: true,
            nome: true,
            telefoneCelular: true,
            endereco: true,
        },
    })

    if (requestedUser === null) {
        res.status(404).json({ msg: "O usuário não existe." })
        return
    }

    if (requestedUser.senhaUsuario !== password) {
        res.status(403).json({ msg: "Senha incorreta." })
        return
    }

    const jwtPayload = {
        id: requestedUser.idUsuarioComum,
        usuario: requestedUser.nome,
        email: requestedUser.email,
    } satisfies UserPayload

    const token = jwt.sign(jwtPayload, env.JWT_SECRET, {
        expiresIn: "5m",
    })

    const refreshToken = jwt.sign(jwtPayload, env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
    })

    res.cookie("_id", token, {
        maxAge: 300000,
        httpOnly: true,
    })

    res.cookie("_refresh", refreshToken, {
        maxAge: 604800000, // 7 dias
        httpOnly: true,
    })

    res.json(requestedUser)
}
