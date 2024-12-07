import { UsuarioProfissional } from "@/types/usuario-profissional"

export function isUserProfessional(user: any): user is UsuarioProfissional {
    return user && "idProfissional" in user
}
