import { Request, Response } from "express"

export function logout(req: Request, res: Response) {
    res.clearCookie("_id", {
        httpOnly: true,
    })
    res.clearCookie("_refresh", {
        httpOnly: true,
    })
    res.sendStatus(200)
}
