import express from "express"
import { commonUserRoutes } from "./routes/common-user-routes"
import { authRoutes } from "./routes/auth-routes"
import cookieParser from "cookie-parser"

const app = express()

const port = process.env.PORT || 8080

// middlewares
app.use(express.json())
app.use(cookieParser())

app.use(authRoutes)
app.use(commonUserRoutes)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
