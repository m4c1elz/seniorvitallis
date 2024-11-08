import { prisma } from "@/lib/prisma"
import { verifyToken } from "@/middlewares/verify-token"
import { Router } from "express"
import * as professionalController from "@/controllers/professionals"

const router = Router()

router.get(
    "/professionals",
    verifyToken,
    professionalController.getProfessionals
)

export const professionalsRoutes = router
