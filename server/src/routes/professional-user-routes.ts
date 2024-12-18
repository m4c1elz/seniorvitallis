import * as professionalUserController from "@/controllers/professionals"
import { verifyToken } from "@/middlewares/verify-token"
import { Router } from "express"

const router = Router()

router.use("*", verifyToken)

router.get("/professional-user/requests", professionalUserController.requests)
router.get("/professional-user/me", professionalUserController.getAuthUser)
router.get(
    "/professional-user/my-clients",
    professionalUserController.getClients,
)
router.get(
    "/professional-user/messages",
    professionalUserController.getContactList,
)
router.patch(
    "/professional-user/requests/:id/accept",
    professionalUserController.acceptContract,
)
router.patch(
    "/professional-user/requests/:id/cancel",
    professionalUserController.rejectContact,
)

export const professionalUserRoutes = router
