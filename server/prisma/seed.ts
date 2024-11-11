import { prisma } from "@/lib/prisma"
import {
    Avaliacao,
    Contratacao,
    UsuarioComum,
    UsuarioProfissional,
} from "@prisma/client"
import { faker } from "@faker-js/faker"
import { createSpinner } from "nanospinner"
import { generate as generateCPF } from "@fnando/cpf"
import { generate as generateCNPJ } from "@fnando/cnpj"

const spinner = createSpinner()

function getRandomArrayItem<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}

async function main() {
    spinner.start({
        text: "Alimentação de banco de dados iniciada.",
    })

    try {
        spinner.update({
            text: "Resetando banco de dados...",
        })

        await prisma.denuncia.deleteMany()
        await prisma.mensagem.deleteMany()
        await prisma.chat.deleteMany()
        await prisma.avaliacao.deleteMany()
        await prisma.contratacao.deleteMany()
        await prisma.usuarioComum.deleteMany()
        await prisma.usuarioProfissional.deleteMany()

        spinner.start({
            text: "Inserindo usuários comuns...",
        })

        await prisma.usuarioComum.createMany({
            data: Array.from({ length: 20 }).map(() => ({
                cpf: generateCPF(true),
                email: faker.internet.email(),
                endereco: faker.location.streetAddress(),
                nome: faker.person.fullName(),
                senhaUsuario: "senha123",
                telefoneCelular: faker.phone.number({
                    style: "international",
                }),
            })),
        })

        spinner.update({
            text: "Inserindo usuários profissionais...",
        })

        await prisma.usuarioProfissional.createMany({
            data: Array.from({ length: 80 }).map(() => ({
                cnpj: generateCNPJ(),
                cpf: generateCPF(true),
                descricao: faker.lorem.sentences(2),
                disponibilidade:
                    Math.floor(Math.random() * 10) > 5
                        ? "disponivel"
                        : "indisponivel",
                email: faker.internet.email(),
                endereco: faker.location.streetAddress(),
                especialidade: faker.person.jobTitle(),
                nome: faker.person.fullName(),
                senhaUsuario: "senha123",
                telefoneCelular: faker.phone.number({
                    style: "international",
                }),
            })),
        })

        const idsDeProfissionais = (
            await prisma.usuarioProfissional.findMany()
        ).map(profissional => profissional.idProfissional)
        const idsDeComuns = (await prisma.usuarioComum.findMany()).map(
            usuario => usuario.idUsuarioComum,
        )

        spinner.update({
            text: "Inserindo contratações...",
        })

        await prisma.contratacao.createMany({
            data: Array.from({ length: 50 }).map(() => ({
                fkProfissionalId: getRandomArrayItem(idsDeProfissionais),
                fkUsuarioComumId: getRandomArrayItem(idsDeComuns),
                dataContratacao: faker.date.between({
                    from: "2024-01-10",
                    to: "2024-08-20",
                }),
                prazoContratacao: faker.date.between({
                    from: "2024-08-20",
                    to: "2024-09-30",
                }),
                precoContratacao: faker.number.int({
                    min: 100,
                    max: 800,
                }),
                statusContratacao: getRandomArrayItem([
                    "pendente",
                    "concluida",
                    "cancelada",
                ]),
            })),
        })

        spinner.update({
            text: "Inserindo avaliações...",
        })

        await prisma.avaliacao.createMany({
            data: Array.from({ length: 100 }).map(() => ({
                nota: faker.number.float({
                    min: 1,
                    max: 5,
                }),
                profissionalId: getRandomArrayItem(idsDeProfissionais),
                usuarioComumId: getRandomArrayItem(idsDeComuns),
                comentario: "vou fazer um pix pra você",
                dataAvaliacao: faker.date.anytime(),
            })),
        })

        spinner.update({
            text: "Criando chats...",
        })

        await prisma.chat.createMany({
            data: Array.from({ length: 100 }).map(() => ({
                usuarioComumId: getRandomArrayItem(idsDeComuns),
                fkProfissionalId: getRandomArrayItem(idsDeProfissionais),
                dataInicioChat: faker.date.between({
                    from: "2024-04-20",
                    to: "2024-08-30",
                }),
            })),
        })

        spinner.update({
            text: "Adicionando mensagens aos chats...",
        })

        const chats = await prisma.chat.findMany()

        for (const chat of chats) {
            await prisma.mensagem.createMany({
                data: Array.from({ length: 20 }).map(() => ({
                    fkUsuarioComumId: chat.usuarioComumId,
                    fkProfissionalId: chat.fkProfissionalId,
                    conteudo: faker.lorem.lines(2),
                    fkChatId: chat.idChat,
                    dataEnvio: new Date(),
                })),
            })
        }

        spinner.success({
            text: "Banco de dados alimentado.",
        })
    } catch (error) {
        if (error instanceof Error) {
            spinner.error({
                text: `Houve um erro!\n${error.message}`,
            })
        }
    }
    process.exit()
}

main()
