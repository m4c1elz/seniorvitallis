declare namespace Express {
    export interface Request {
        user: {
            id: string
            usuario: string
            email: string
        }
    }
}
