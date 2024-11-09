export interface Contract {
    usuarioProfissional: UsuarioProfissional
    dataContratacao: string
    prazoContratacao: string
    statusContratacao: "pendente" | "concluida" | "cancelada"
}

export interface UsuarioProfissional {
    idProfissional: number
    nome: string
}
