import { prisma } from "@/lib/prisma"
import { UsuarioComum, UsuarioProfissional } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { createSpinner } from 'nanospinner'
import { generate as generateCPF } from '@fnando/cpf'
import { generate as generateCNPJ } from '@fnando/cnpj'

const spinner = createSpinner()

async function main() {
    spinner.start({
        text: "Alimentação de banco de dados iniciada."
    })

    try {
        spinner.start({
            text: "Inserindo usuários comuns..."
        })
    
        await prisma.usuarioComum.createMany({
            data: Array.from<UsuarioComum>({length: 20}).map(() => ({
                cpf: generateCPF(true),
                email: faker.internet.email(),
                endereco: faker.location.streetAddress(),
                nome: faker.person.fullName(),
                senhaUsuario: "senha123"
            }))
        })
    
        spinner.update({
            text: "Inserindo usuários profissionais..."
        })
    
        await prisma.usuarioProfissional.createMany({
            data: Array.from<UsuarioProfissional>({length: 80}).map(() => ({
                cnpj: generateCNPJ(true),
                cpf: generateCPF(true),
                descricao: faker.person.jobDescriptor(),
                disponibilidade: Math.floor(Math.random() * 10) > 5 ? "disponivel" : "indisponivel",
                email: faker.internet.email(),
                endereco: faker.location.streetAddress(),
                especialidade: faker.person.jobTitle(),
                nome: faker.person.fullName(),
                senhaUsuario: "senha123",
                telefoneCelular: faker.phone.number()
            }))
        })
    
        spinner.success({
            text: "Banco de dados alimentado."
        })
    } catch (error) {
        if (error instanceof Error) {
            spinner.error({
                text: `Houve um erro!\n${error.message}`
            })
        }
    }
    process.exit()
}

main()