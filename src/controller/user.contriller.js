import { asyncHandelar } from "../utils/asyncHandelar.js";
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js"
import {uploadCloudnary} from "../utils/cloudnary.js"
import {ApiResponse} from "../utils/apiResponce.js"

const registerUser = asyncHandelar(async (req, res) => {
    //  res.status(200).json({
    //     message:"ok"
    // })

    const { fullname, email, username, password } = req.body
    console.log("email: ", email);

    if ([fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "all frends are required")
    }

    // email cheking

    if (!email.includes("@")) {
        throw new ApiError(400, "Email must contain '@'");
    }

    // check the user
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]

    })

    //   console.log("🔍 Existing user found:", existingUser);



    if (existingUser) {
        throw new ApiError(409, "User with email and username already exists")
    }
    // console.log("📦 existingUser:", existingUser);

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImgLocalPath = req.files?.coverImg[0]?.path;
   
    if (!avatarLocalPath) {
        throw new ApiError(400,"avatar  lageahi")
    }

    const avatar = await uploadCloudnary(avatarLocalPath)
    const coverImg = await uploadCloudnary(coverImgLocalPath)

     if (avatar) {
        throw new ApiError(400,"avatar  lageahi")
     }
     
        const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImg : coverImg?.url || "",
        email,
        password,
        username:username.toLowerCase()
     })

     const createUser = await User.findById(user_id).select(
        "-password -refreshToken"
     )

     if (!createUser) {
        throw new ApiError(500,"somthing went wrong while ragister the user")
     }

     return res.status(201).json(
        new ApiResponse (200, createUser, "user ragister successfully")
     )

})

export { registerUser }                                                  