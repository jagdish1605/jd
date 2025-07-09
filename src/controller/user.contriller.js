import { asyncHandelar } from "../utils/asyncHandelar.js";

const registerUser = asyncHandelar ( async (req,res) => {
     res.status(200).json({
        message:"ok"
    })
} )

export {registerUser}