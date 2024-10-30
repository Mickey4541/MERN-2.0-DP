
import { Request, Response } from "express";
import User from "../database/models/userModel";
import exp from "constants";


class AuthController{
    public static async registerUser(req:Request,res:Response):Promise<void>{ // public static makes this function public and we can access this function from any file. Hamilai instantiation gariranu parena directly access garna milyo. Like aahile hamile yeslai userRoute.ts file maa access garirako xam. Like :::router.route('/register').post(AuthController.registerUser)

        const {username, email, password} = req.body
        if(!username || !email || !password){
            res.status(400).json({
                message : "Please Provide username, email, password"
            })
            return
        }
        await User.create({
            username : username,
            email : email,
            password : password
        })
        res.status(200).json({
            message : "User registered Successfully"
        })
    }
}
export default AuthController