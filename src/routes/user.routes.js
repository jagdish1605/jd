import { Router } from "express";
import { registerUser } from "../controller/user.contriller.js"
import { upload } from "../middelware/multer.middelware.js";

const router = Router();

router.route("/ragister").post(
    upload.fields([
        {
          name:"avatar",
          maxCount:1      
        },
        {
                   name:"coverImg",
                   maxCount:1
        }
    ]),
    registerUser
)

export default router