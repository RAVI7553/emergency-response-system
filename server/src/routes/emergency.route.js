import express from "express";
import { createEmergency } from "../controllers/emergency.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { getAllEmergencies } from "../controllers/emergency.controller.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { acceptEmergency } from "../controllers/emergency.controller.js";
import { completeEmergency } from "../controllers/emergency.controller.js";

const router = express.Router();

// Protected route
router.post("/", verifyToken, createEmergency);
router.get("/", verifyToken, allowRoles("Admin"), getAllEmergencies);
router.patch("/:id", verifyToken, allowRoles("Driver"), acceptEmergency);
router.patch(
  "/:id/complete",
  verifyToken,
  allowRoles("Driver"),
  completeEmergency,
);
export default router;
