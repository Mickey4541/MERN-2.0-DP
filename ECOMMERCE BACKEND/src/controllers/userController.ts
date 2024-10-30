import { Request, Response } from "express";
import User from "../database/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
    public static async registerUser(req: Request, res: Response): Promise<void> {
        // public static makes this function public and we can access this function from any file. Hamilai instantiation gariranu parena directly access garna milyo. Like aahile hamile yeslai userRoute.ts file maa access garirako xam. Like :::router.route('/register').post(AuthController.registerUser)
    const { username, email, password, role } = req.body;
        if (!username || !email || !password) {
        res.status(400).json({
            message: "Please Provide username, email, password",
        });
        return;
    }
        // Validate role
        const validRoles = ['customer', 'admin'];
        if (role && !validRoles.includes(role)) {
            res.status(400).json({
                message: "Invalid role. Role must be either 'customer' or 'admin'.",
            });
            return;
        }

        await User.create({
            username: username,
            email: email,
            password: bcrypt.hashSync(String(password), 8),
            role: role || 'customer'//role xa vani matra role halni natra default ta xadai xa.
        });
        res.status(200).json({
        message: "User registered Successfully",
        });
    }





    public static async loginUSer(req: Request, res: Response): Promise<void> {
        //user input
        const { email, password } = req.body;
        if (!email || !password) {
        res.status(400).json({
            message: "Please provide email, password",
        });
        return; //aahile yo return ley kehi return gareko xaina mathi void return garni vanera vaneko xam tei vayera kehi return garnu vayena.
        }
        //check whether user with above email exist or not
        //User.findAll() returns an array of user records that match the where condition (in this case, a user with the specified email). The line const [data] = ... uses array destructuring to extract the first item of the array returned by findAll.
        const [data] = await User.findAll({
        where: {
            email: email,
        },
        });
        //console.log(data);//gives data in array
        if (!data) {
        res.status(404).json({
            message: "No user with that email",
        });
        return; //yaha return hamim, so else wala code lekhna parena.
        }
        //check the password now:::
        const isMatched = bcrypt.compareSync(password, data.password); //data is aahile check garna lako password and data.password is pahile database maa hash vayera store vaako password. and it return boolean.
        if (isMatched) {
        //yaha samma email password mili sakyo aba token generate garera user lai send garna paryo.
        // res.status(200).json({
        //     message : "Logged in success"
        // })
        const token = jwt.sign({ id: data.id }, "haha", {
            expiresIn: "20d",
        });
        res.status(200).json({
            message: "Logged in Successfully",
            data: token,
        });
        } else {
        res.status(403).json({
            message: "Invalid password", //password milena.
        });
        }
    }
}


export default AuthController;
