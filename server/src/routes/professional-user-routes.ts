import * as professionalUserController from "@/controllers/professionals"
import { verifyToken } from "@/middlewares/verify-token"
import { Router } from "express"

const router = Router()

router.get(
    "/professional-user/requests",
    verifyToken,
    professionalUserController.requests,
)
router.get(
    "/professional-user/me",
    verifyToken,
    professionalUserController.getAuthUser,
)

export const professionalUserRoutes = router
