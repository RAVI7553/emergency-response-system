import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import { verifyToken } from "./middleware/auth.middleware.js";
import adminRoutes from "./routes/admin.route.js";
import emergencyRoutes from "./routes/emergency.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/emergency", emergencyRoutes);
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user,
  });
});
app.use("/api/admin", adminRoutes);
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is running 🚀",
  });
});

export default app;
