import { Router } from "express"
import * as authController from "@/controllers/auth"

const router = Router()

router.post("/auth/common-user/login", authController.commonLogin)
router.post("/auth/professional/login", authController.professionalLogin)
router.get("/auth/refresh", authController.refreshToken)

export const authRoutes = router
