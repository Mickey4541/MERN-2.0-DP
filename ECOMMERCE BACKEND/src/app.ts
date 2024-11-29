//Here, hamile boolean, number, string kun maa lagxa vanni ta taha pai halxum but we cannot determine the type of app, request, response etc. So, we already installed (npm install @types/express --save-dev) this package which can determine the types of these. So, we import the application, request and response from the express to determine the types of app, req and res.
import express,{Application, Request, Response} from 'express'
const app:Application = express()
//port number
const PORT:number = 3000

import path from 'path';

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(express.static("./storage/"))

//inporting dotenv file
import * as dotenv from 'dotenv'
dotenv.config()

//app.use(express.json()) lets your Express app read JSON data sent in requests. It makes the JSON data accessible as req.body in your routes.
app.use(express.json())

//cors
import cors from 'cors'
app.use(cors({
    origin : '*'
}))
// app.options('*', cors());  // Enable preflight for all routes




//importing connection.ts
import './database/connection'

//importing userRoutes
import userRoute from './routes/userRoute'
app.use("", userRoute)//This means::http://localhost:3000/register
//app.use("/hello", userRoute)//This means::http://localhost:3000/hello/register



import productRoute from './routes/productRoute'
app.use("/admin/product", productRoute)

import categoryRoute from './routes/categoryRoute'
app.use("/admin/category", categoryRoute)




//admin seeder
import adminSeeder from './adminSeeder'
adminSeeder()

//category Seeder
import categoryController from './controllers/categoryController'
categoryController.seedCategory()

//cartcontorller
import cartRoute from './routes/cartRoute'
app.use("/customer/cart", cartRoute)

//order Route
import orderRoute from './routes/orderRoute'
import { Server } from 'socket.io';
import { promisify } from 'util';
import jwt from 'jsonwebtoken'
import User from './database/models/userModel';
app.use("/order", orderRoute)




const server = app.listen(PORT, () => {
    console.log("Server has started at port", PORT);
    
})


const io = new Server(server, {
    cors : {
        origin : ['http://localhost:5173', 'http://localhost:5174']
    }
})


let onlineUsers:any = []
const addToOnlineUsers = (socketId: string, userId: string, role: string)=>{
    onlineUsers = onlineUsers.filter((user:any)=>user.userId !==userId)
    onlineUsers.push({socketId, userId, role})
}



io.on("connection", async (socket)=>{
    console.log("A Client is connected");
    const {token} = socket.handshake.auth
    if(token){
                //@ts-ignore
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY)
         //@ts-ignore
        const doesUserExists = await User.findByPk(decoded.id)
        if(doesUserExists){
            addToOnlineUsers(socket.id, doesUserExists.id, doesUserExists.role)
        }
    }
  
    
    socket.on("updatedOrderStatus",({status,orderId, userId})=>{
        const findUser = onlineUsers.find((user:any)=>user.userId == userId)
        if(findUser){
            io.to(findUser.socketId).emit("statusUpdated"),{
                status, orderId
            }
        }
    })
})