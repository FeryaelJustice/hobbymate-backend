import { Router } from "express";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = Router();

router.get("/", (req, res) => {
    res.sendStatus(200);
});
router.get("/test", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to the main route" });
});

export default router;
