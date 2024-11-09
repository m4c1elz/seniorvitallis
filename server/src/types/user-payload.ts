import { JwtPayload } from "jsonwebtoken"

export interface UserPayload extends JwtPayload {
    id: number
    usuario: string
    email: string
}
