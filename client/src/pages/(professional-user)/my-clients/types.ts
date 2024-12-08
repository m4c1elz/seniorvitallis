export type Clients = Client[]

export interface Client {
    idContratacao: number
    dataContratacao: string
    prazoContratacao: string
    precoContratacao: string
    statusContratacao: string
    usuarioComum: {
        nome: string
    }
}
