import { Router } from "express";
import authController from "../controller/authController.js";

const router = Router();

router.get("/", (req, res) => {
    res.sendStatus(200);
});
router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
