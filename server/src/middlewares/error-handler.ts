import { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (err instanceof ZodError) {
        const messages = err.errors.map(err => err.message)
        let result = {}
        let i = 1
        for (const message of messages) {
            Object.assign(result, {
                [`Error ${i}`]: message,
            })
            i++
        }
        res.status(500).json(result)
    } else if (err instanceof Error) {
        // todo
    }
}
