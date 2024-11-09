export interface Contract {
    usuarioProfissional: UsuarioProfissional
    dataContratacao: string
    prazoContratacao: string
    statusContratacao: string
}

export interface UsuarioProfissional {
    idProfissional: number
    nome: string
}
