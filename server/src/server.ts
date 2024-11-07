import express from 'express'
import { prisma } from './lib/prisma'

const app = express()
app.use(express.json())

const port = process.env.PORT || 8080

app.get("/", async (_req, res) => {
    const professionals = await prisma.usuarioProfissional.findMany({
        orderBy: {
            nome: "asc"
        },
        include: {
            avaliacao: true,
            _count: true
        }
    })

    res.json(professionals)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})