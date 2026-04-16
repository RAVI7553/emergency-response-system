import express from "express";
import { verifyToken } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

// Admin dashboard test route
router.get("/dashboard", verifyToken, allowRoles("Admin"), (req, res) => {
  res.json({
    message: "Welcome to Admin Dashboard",
  });
});

export default router;
