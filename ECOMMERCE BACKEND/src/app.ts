//Here, hamile boolean, number, string kun maa lagxa vanni ta taha pai halxum but we cannot determine the type of app, request, response etc. So, we already installed (npm install @types/express --save-dev) this package which can determine the types of these. So, we import the application, request and response from the express to determine the types of app, req and res.
import express,{Application, Request, Response} from 'express'
const app:Application = express()
//port number
const PORT:number = 3000

//inporting dotenv file
import * as dotenv from 'dotenv'
dotenv.config()

//app.use(express.json()) lets your Express app read JSON data sent in requests. It makes the JSON data accessible as req.body in your routes.
app.use(express.json())





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



app.listen(PORT, () => {
    console.log("Server has started at port", PORT);
    
})