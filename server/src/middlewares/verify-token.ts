import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { env } from "@/env"
import { UserPayload } from "@/types/user-payload"

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies["_id"]
    if (!token) {
        res.sendStatus(401)
        return
    }

    try {
        const verifiedToken = jwt.verify(token, env.JWT_SECRET) as UserPayload
        req.user = verifiedToken
        next()
    } catch (error) {
        res.sendStatus(403)
        return
    }
}
