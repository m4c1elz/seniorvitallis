import express from "express"
import { professionalsRoutes } from "./routes/professional-routes"

const app = express()
app.use(express.json())

const port = process.env.PORT || 8080

app.use(professionalsRoutes)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
