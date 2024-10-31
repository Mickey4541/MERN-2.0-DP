//this middleware checks if the user is login or not.



import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import User from "../database/models/userModel";


//Hamile tala user lai authenticate garera userData nikalim pahile, userData vaneko findById garera nikaleko object ho, ani req vanni object maa user vanni key banayim ra tyo userData pass garim. tyo user vanni key req vanni object maa hamile banako ho. req ko type ta Request vanni express ley deyako xa tara hamile banako user ko type ta xaina. Tei vayera user lai pani type dina ko lagi req:Request lai inherit garera user ko lagi type banauna lako. Inherit garepaxi Request ko types haru user ley use garna pauni vayo
export interface AuthRequest extends Request{
    user?:{ //? means optional. user jatibela pani hunxa vanni hunna
        username : string,
        email : string,
        role : string,
        password : string,
        id : string
    }
}


export enum Role {
    Admin = 'admin',
    Customer = 'customer'
}




class AuthMiddleware {
    async isAuthenticated(req:AuthRequest, res:Response,next:NextFunction):Promise<void>{
        //first get token from user(verify gardaa loginUSer controller maa pahile password bata generate vako token magni ani teslai verify garnin ho)
        const token  = req.headers.authorization //here authorization is a key(yesko thaumaa aru j ni lekhna sakiyo)
        if(!token || token === undefined){
            res.status(403).json({
                message : "Token not provided"
            })
            return
        }
        //verify token if it is legit or tempered.
        jwt.verify(token, process.env.SECRET_KEY as string, async (err, decoded:any) => {
            if(err){
                res.status(403).json({
                    message : 'Invalid Token'
                })
            }else{
                try {
                    //check if the decoded object id user exist or not
                const userData = await User.findByPk(decoded.id)//User vanni table maa tyo id wala koi user xa yaa xaina check  gareko
                if(!userData){
                    res.status(404).json({
                        message : "No user with that token"
                    })
                    return
                }
                req.user = userData //req is object ani tei req vanni object maa user vanni key banayera userData pass gareko. userData chai bharkhar verify/authenticate gareko id ko user ho.
                next()//calling next middleware. yo call gardaa req ley tes maa hamile banako user pani sangai lagera janxa. like req is bus and user chai passenger. kinaki req vanni object bata hamile user vanni key banako ho.
                } catch (error) {
                    res.status(500).json({
                        message : "Something went wrong"
                    })
                }
            }
        })
    }



    //this middleware check the role of user. This middleware checks the role and if it is admin it let user to add the product or if it is not admin , it restrict and give error.
    restrictTo(...roles:Role[]){//yo ...roles ko place maa name j dida ni hunxa
        return (req:AuthRequest, res:Response, next:NextFunction)=>{
            let userRole = req.user?.role as Role //req.role xa vani role nikal vaneko
            if(!roles.includes(userRole)){
                res.status(403).json({
                    message : "you don't have permission"
                })
            }else{
                next()
            }
        }
    }
}


//yesari instantiation garera ni export garna paiyo
export default new AuthMiddleware()