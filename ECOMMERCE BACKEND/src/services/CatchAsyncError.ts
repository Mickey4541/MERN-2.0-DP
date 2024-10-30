import { NextFunction, Request, Response } from "express";


const errorHandler = (fn:Function) => {
    //next wala code na lekhdaa ni hunxa
    return (req:Request, res:Response, next:NextFunction)=>{
        fn(req,res,next).catch((err:Error)=>{
            return res.status(500).json({
                message : "Internal Error",
                errorMessage : err.message
            })
        })
    }
}

export default errorHandler