import { Router } from "express"
import * as authController from "@/controllers/auth"

const router = Router()

router.post("/auth/common-user/login", authController.login)

export const authRoutes = router
