import { verifyToken } from "@/middlewares/verify-token"
import { Router } from "express"
import * as commonUserController from "@/controllers/common-user"

const router = Router()

router.use("*", verifyToken)

router.get(
    "/common-user/professionals",
    commonUserController.getAvailableProfessionals,
)
router.get(
    "/common-user/professionals/history",
    commonUserController.getHirings,
)
router.get(
    "/common-user/professionals/:id",
    commonUserController.getProfessionalById,
)
router.get("/common-user/messages", commonUserController.getContactList)
router.get("/common-user/me", commonUserController.getAuthUser)
router.post(
    "/common-user/professionals/:id/contracts",
    commonUserController.requestContract,
)

export const commonUserRoutes = router
