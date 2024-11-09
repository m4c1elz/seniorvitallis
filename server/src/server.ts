import "express-async-errors"
import express from "express"
import cookieParser from "cookie-parser"
import { commonUserRoutes } from "@/routes/common-user-routes"
import { authRoutes } from "@/routes/auth-routes"
import { errorHandler } from "@/middlewares/error-handler"
import cors from "cors"

const app = express()

const port = process.env.PORT || 8080

// middlewares
app.use(
    cors({
        // DEV ONLY. CHANGE LATER.
        origin: true,
        credentials: true,
    }),
)
app.use(express.json())
app.use(cookieParser())

app.use(authRoutes)
app.use(commonUserRoutes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
