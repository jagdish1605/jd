import { Router } from "express";
import { registerUser } from "../controller/user.contriller.js"

const router = Router();

router.route("/ragister").post(registerUser)

export default router