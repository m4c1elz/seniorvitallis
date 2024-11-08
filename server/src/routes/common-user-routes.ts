import { verifyToken } from "@/middlewares/verify-token"
import { Router } from "express"
import * as commonUserController from "@/controllers/common-user"

const router = Router()

router.get(
    "/common-user/professionals",
    verifyToken,
    commonUserController.getAvailableProfessionals
)
router.get(
    "/common-user/professionals/history",
    verifyToken,
    commonUserController.getHirings
)

export const commonUserRoutes = router
