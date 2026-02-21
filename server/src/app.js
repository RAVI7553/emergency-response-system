import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import { verifyToken } from "./middleware/auth.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/api/proected", verifyToken, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user,
  });
});
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is running 🚀",
  });
});

export default app;
