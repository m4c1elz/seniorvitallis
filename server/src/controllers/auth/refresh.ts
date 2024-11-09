import { NextFunction, Request, Response } from "express"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { env } from "@/env"
import { UserPayload } from "@/types/user-payload"

export async function refreshToken(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const token = req.cookies["_refresh"]
    if (!token) {
        res.sendStatus(401)
        return
    }

    try {
        const { id, email, usuario } = jwt.verify(
            token,
            env.JWT_REFRESH_SECRET,
        ) as UserPayload

        const accessToken = jwt.sign({ id, email, usuario }, env.JWT_SECRET, {
            expiresIn: "5m",
        })

        res.cookie("_id", accessToken, {
            httpOnly: true,
            maxAge: 300000,
        })

        res.sendStatus(200)
    } catch (error) {
        if (error instanceof JsonWebTokenError) {
            res.status(403).json({
                msg: error.message,
            })
            return
        } else {
            next(error)
        }
    }
}
