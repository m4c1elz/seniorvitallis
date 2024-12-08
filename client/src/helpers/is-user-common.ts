import { UsuarioComum } from "@/types/usuario-comum"

export function isUserCommon(user: any): user is UsuarioComum {
    return user && "idUsuarioComum" in user
}
