export type ContractRequests = ContractRequest[]

export interface ContractRequest {
    idContratacao: number
    dataContratacao: string
    prazoContratacao: string
    precoContratacao: string
    statusContratacao: string
    usuarioComum: {
        nome: string
    }
}
