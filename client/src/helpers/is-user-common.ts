import { UsuarioComum } from "@/types/usuario-comum"

export function isUserCommon(user: any): user is UsuarioComum {
    console.log(user)
    return user && "idUsuarioComum" in user
}
