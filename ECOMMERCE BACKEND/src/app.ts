//Here, hamile boolean, number, string kun maa lagxa vanni ta taha pai halxum but we cannot determine the type of app, request, response etc. So, we already installed (npm install @types/express --save-dev) this package which can determine the types of these. So, we import the application, request and response from the express to determine the types of app, req and res.
import express,{Application, Request, Response} from 'express'
const app:Application = express()
//port number
const PORT:number = 3000

//inporting dotenv file
import * as dotenv from 'dotenv'
dotenv.config()

//importing connection.ts
import './database/connection'








app.get('/',(req:Request,res:Response) => {
    res.send("Hello World")
})

app.get('/about',(req:Request,res:Response) => {
    res.send("Hello World from about page.")
})



app.listen(PORT, () => {
    console.log("Server has started at port", PORT);
    
})