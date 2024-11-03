> Required packages::
- npm init
- npm i express
- npm i nodemon
- npm i --save-dev typescript => typescript for development
- npm install @types/express --save-dev => types of express which we can get from this command and this is also a development dependency. It makes development easier and didn't used in production.
- npm i @types/node --save-dev => this is also a dev dependency
- npx tsc --init => this command makes a tsconfig.json file.

> Setup::
- We have to setup the root directory and output directory inside the tsconfig.json file. First make a "src" folder and "build" folder and Search for "outdir" and "rootdir"  inside the tsconfig.json file and set the folder name as:::
- "outDir": "build", 
- "rootDir": "src",  
- It means our typescript code is written inside the "src" folder. The typescript code then be converted into the javascript. So, the transpiled js code(simply the output) is stored insie "build" folder.

```javascript
//Here, hamile boolean, number, string kun maa lagxa vanni ta taha pai halxum but we cannot determine the type of app, request, response etc. So, we already installed (npm install @types/express --save-dev) this package which can determine the types of these. So, we import the application, request and response from the express to determine the types of app, req and res.
import express,{Application, Request, Response} from 'express'
const app:Application = express()
const PORT:number = 3000


app.get('/',(req:Request,res:Response) => {
    res.send("Hello World")
})

app.get('/about',(req:Request,res:Response) => {
    res.send("Hello World from about page.")
})

app.listen(PORT, () => {
    console.log("Server has started at port", PORT);
    
})
```
> Now to run the ts code::
- npx tsc => Running npx tsc will look for a tsconfig.json file in your project directory to understand your TypeScript configuration and follow the configuration. The command npx tsc simply transpiles (converts) TypeScript (.ts) code into JavaScript (.js).

- Then, to run the app.js file which is inside the "build" folder, we can run:: node build/app.js.

- But we can make it short for our convenience. Inside package.json file, and inside scripts, we can do this and simply run through "npm start". Like::
```json
- "start" : "npx tsc && node build/app.js"
```
# Database connection (Xampp/mysql):
> Packages needed::
- sequelize(ORM) => npm i sequelize
- mysql2 => npm i mysql2
- types of sequelize => npm i --save-dev @types/sequelize

- Make a config folder and make a dbConfig.ts file and the configuration code of database.
This code sets up and exports a configuration object for connecting to a MySQL database using Sequelize.
```dbconfig.ts
type Database = {
    host : string,
    user : string,
    password : string,
    db : string,
    dialect : 'mysql' | 'postgres' | 'sqlite', //The dialect option specifies the database type (e.g., 'mysql', 'postgresql', 'sqlite') your app will connect to. This lets the ORM (like Sequelize) tailor queries to match the chosen database. It ensures compatibility and proper syntax for that specific database.
    pool : {// this means , kati otaa connection open garney vanni kura ho.
        max : number,
        min : number,
        idle : number,
        acquire : number
    }
}

const dbConfig:Database = {
    host : 'localhost',
    user : 'root',
    password : '',
    db : 'mern2ecommercedatabase',
    dialect : 'mysql',
    pool : {
        idle : 10000,
        max : 5,
        min : 0,
        acquire : 10000
    }
}
export default dbConfig


/*
The pool settings control database connections:

- idle: Time (in ms) a connection can be idle before closing.
- max and min: Maximum and minimum number of connections allowed.
- acquire: Time (in ms) to wait for a connection before timing out.
- These help manage connection use and efficiency.
 */
```
- Make a model folder and inside that, make a index.ts file where the db related code is written. This code connects to a MySQL database with Sequelize and checks if the connection is successful. It also sets up an object to manage the Sequelize library and instance. Code is :
```model/index.ts
//our medium to connect with the database is sequelize.so, we have to import it. It gives Sequelize class and DataTypes. DataTypes means (hamile hamro db table ko columns ko datatypes k rahhni ho like integer, string vanni chij DataTypes bata aauxa. ) and Sequelize to do instantiation.

import  {Sequelize, DataTypes} from 'sequelize'
import dbConfig from '../config/dbConfig'

//In Sequelize, an instance is an object created from a class (in this case, the Sequelize class). When you write const sequelize = new Sequelize(...), you're creating an instance of the Sequelize class with your database configuration.
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password,{
    host : dbConfig.host,
    dialect : dbConfig.dialect,
    port : 3306,
    pool : {
        acquire : dbConfig.pool.acquire,
        min : dbConfig.pool.min,
        max : dbConfig.pool.max,
        idle : dbConfig.pool.idle
    }
})

//authenticate is a method of the Sequelize instance (object) that checks if the connection to the database is successful.

// sequelize.authenticate() returns a promise that resolves if the connection is successful and rejects if there’s an error.

// .then() handles the resolved state of the promise, logging "Connected."

// .catch() handles any rejection (error), logging the error message.

sequelize.authenticate().then(()=>{
    console.log('Connected');
})
.catch((err)=>{
    console.log(err);
    
})


// there is a db object and inside this, there is a two key value pair. The db object holds the Sequelize library and its instance together. This makes it easy to manage database connections and models in your application.
const db:any = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.sequelize.sync({force : false}).then(()=>{
    console.log("Migrated Successfully");
})
export default db
```

- import dbconfig.ts file in model/index.ts as:
```js
import dbConfig from '../config/dbConfig'

```

- Then, require it in app.ts file by:
       => require('./model/index')


> Here, the ts code is first transpiled into js and stored in build folder then it gets executed but there is a package called  "ts-node" which can execute code directly without transpile the code in js. It acts as a typesctipt execution environment for node.js.
- npm i ts-node

> tsc-node is a package that allows you to run TypeScript files but relies on the TypeScript compiler (tsc) to transpile the code.
 - npm i tsc-node
 
 
- Now, we have to write such configuration which can detect the .ts extension inside src folder and run through tsc-node package which we installed already by: npm i tsc-node. And the agent is nodemon.

- Make a nodemon.json file and write configuration code:
```json
{
    "watch" : ["src"],
    "ext" : ".ts,.js",
    "ignore" : [],
    "exec" : "npx ts-node ./src/app.ts"
}

```
- Then inside package.json file, write this:
```json
"start": "npx nodemon",
```
- now we can run our project by:: "npm start" and it will restart automatically.


> The transpiled code inside build folder is sometime need to be deleted and again transipled. Manually delete garera feri transpile garnu vanda there is a package called rimraf which can delete folder in one go. To install:::
- npm i rimraf --save-dev => dev dependency

- Then, inside package.json file::And inside scripts file:: Write this:::
```json
"build" : "rimraf ./build && tsc",
```
- This json means delete the build folder and again transpile the ts into js.

- To run rimraf : npm run build

> Note:: tsc-node directly run typescript but the tsc transpile the ts into js. 

# dotenv:::
- It is a file. To use it we need a dotenv package. It is used for storing private data like login credentials.
- npm i dotenv

# Other way to connect database::
- delete that config folder and dbConfig.ts file inside it and also delete that model/index.ts foler and file.
- Inside src folder, make a database folder and make a connection.ts file.
- install package : npm i sequelize-typescript. => we can use it on ts. It gives the types of sequelize in typescript.
- import sequelize-typescript in database/connection.ts file.
```ts
import { Sequelize } from "sequelize-typescript";
```
- Make a dotenv file again in main folder and write credentials  and also import it in app.ts as:
```ts
import * as dotenv from 'dotenv'
dotenv.config()
```
- Write a connection code inside connection.ts file and import it in app.ts.
```js
- import './database/connection'
```
- Make a models folder inside database folder and make a userModel.ts file inside it and write code.

- Install reflect-metadata package:
```js
- npm i reflect-metadata
```
- Then inside tsconfig.json file, uncomment this:
```tsconfig.json
  /* Language and Environment */
                            
    "experimentalDecorators": true,                  
    "emitDecoratorMetadata": true,  
```
>>>>>>>>>>>>>>>>>>>>Table created and database connection successfully>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

- Now how to put data in this table?
- for that, we have controller. Controller is a function which help to send and receive data to and from database.
> MVCR PATTERN:
- Models => Database related
- Views => frontend UI
- Controllers => main code logics
- Routes => Routes to switch between pages.


# Encryption Decryption and hashing::
- Encryption turns readable data into an unreadable format to protect it, which can be reversed with a key.

- Decryption converts encrypted data back into readable form using the correct key.

- Hashing creates a fixed-length output from data for verification, commonly used for secure password storage. It’s one-way, so the original data can't be recovered from the hash.

- For hashing in nodejs, we can use bcryptjs
- npm install bcrypt || npm i @types/bcrypt --save-dev
- Then, we can use it by:: password : bcrypt.hashSync(password, 8)

# Login implementation:::::
> Process:::
- email and password body maa req.body maa aauxa.
- Aayena vani please provide email and password vandinu paryo.
- aayo vani::
- does any user exist with above email?
if no: error=> user doesn't exist.
if yes: check password:
if no password: error : password didn't match.
if yes: generate token and send token in response(using jwtwebtoken)


# Mongoose v/s Sequelize::::
> Mongoose::
- .create()
- .find() => return array
- .findById() => return object
- findByIdAndDelete()
- findByIdAndupdate()
>Sequelize::
- .create()
- .findAll() => return array
- .findByPk()/findOne() => return object
- destroy({
    where:{
        id : id
    }
})
- update()

# token::
- token is simply an identifier. jastai facebook maa maile mero photo hale vani tyo photo merai profile maa kasari janxa. This is done by token. Token maa usually token id store vako hunxa. token server ley frontend lai dinxa ra localstorage or cookie vanni bhaado maa lagera rakhdinxa. localstorage is not much secure like cookie. cookie is much secure.

- Token: It’s an identifier (like a pass or key) usually issued by the backend to authenticate or identify a user in subsequent requests. Common types are JWTs (JSON Web Tokens).

- Cookie and localStorage: These are storage mechanisms where the frontend can save the token:
> Example Scenerio:
- when a user click on login button on facebook, it hits the backend through api. like /profile. When user hit server from /profile, he also sends a token with that api like:( /profile + token ) like this through GET method. When server gets request of /profile and also gets token, server starts to search the profile of that specific user through the help of token, When server find the profile data of that token, then it sends response to the frontend. here, token plays as an identifier. Token can be hijacked like we can copy cookie of netflix and can watch movies.
- jwt is start from ey and it has 3 part. first part is header, second part is content and third part is signature. we can see it in jwt.io website.
- npm i @types/jsonwebtoken --save-dev
- npm i jsonwebtoken(incase @types wala ley kaam garena vani)
- jwt code inside userController look like:
```js
 const token = jwt.sign({ id: data.id }, "haha", {
            expiresIn: "20d",
        });
```

# Error Handeling : 
- make a services folder first.
- make a catchAsyncError.ts file inside services;
-Write code inside catchAsyncError.ts file:
```ts
import { NextFunction, Request, Response } from "express";


const errorHandler = (fn:Function) => {
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
```
- Then inside userRoute.ts file, handle error like this::
```ts
import errorHandler from "../services/CatchAsyncError"


router.route('/register').post(errorHandler(AuthController.registerUser))

```
# Admin Seeder:
- An admin seeder typically inserts a default admin user into the users table, which lets you immediately have an account with admin permissions. This is useful for apps with role-based access where an admin account is necessary from the start.(Simply start garda bitikai admin ko credentials automatic database table maa lagera halni ho)

- By running the seeder, you can quickly set up this admin user whenever you reset the database, ensuring consistent initial data.

# Add product by admin Middleware:::
When admin is adding the product to the site, we have to check the authentication by making a middleware. Let's say admin is adding the product through http://localhost:300/addProduct through post method, he can easily do this. but if any third user find this api and try to add product, he also can easily do it. so, we have to authenticate the user.
- first, make a middleware to check the user is authenticated or not.(login xa ki nai vanera)
- then, make a middlewate to check the role of the user.
- So, make a authMiddleware.ts file and write code.


# ProductTableModel, Multerconfig, productController product Route start done:
> Do this codes.(watch these files). go in each file and see the code.
- for multer, npm i multer
- npm i @types/multer --save-dev


# Relationship in sequelize:
> connecting usertable and producttable(Relationship):
- this help us to identify which product is posted by which admin/user.
- Inside connection.ts file::
```js
//Relationship to connect tables
// This makes userId column in product table.
User.hasMany(Product, {foreignKey : "userId"})
Product.belongsTo(User, {foreignKey : "userId"})
```
- Then inside productController.ts, 

//AuthMiddleware bata AuthRequest export garera yaha import gareko:
```ts
//authmiddleware
export interface AuthRequest extends Request{...}
```

```ts
//productController.ts
import { AuthRequest } from "../Middleware/authmiddleware";
//this changes:
 const userId = req.user?.id //Authrequest import gareko xam, req:AuthRequest pani use vako xa mathi ani tala product.create maa balla userId maa use gareko xam userId lai.
//this changes::
 await Product.create({
                productName : productName,
                productPrice : productPrice,
                productDescription : productDescription,
                productTotalStockQty : productTotalStockQty,
                productImageUrl : fileName,
                userId : userId//authmiddleware.ts file maa req.user maa user ko id ra aru details aai rako xa. 
            })
```
# making category table:
 - follow the same method to make a table. Make a Category.ts file and make category table.
- Now, there is a relationship between product and categories. Like iphone product belong to electornics category.
```js
//Relationship between categories and product.
Product.belongsTo(Category, {foreignKey : 'categoryId'})
Category.hasOne(Product, {foreignKey : 'categoryId'})

```
//category Seeder
categoryController.seedCategory()
>CATEGORY SEEDER:::
- categoryController.ts file banauni ani code tei file maa xa.
- then inside productController.ts file, changes made to seed category like:
```ts
 await Product.create({
                productName : productName,
                productPrice : productPrice,
                productDescription : productDescription,
                productTotalStockQty : productTotalStockQty,
                productImageUrl : fileName,
                userId : userId,//authmiddleware.ts file maa req.user maa user ko id ra aru details aai rako xa. 
                categoryId : categoryId //categoryid banako for category seeding
            })
```
- import this categoryController file in app.ts:::
```ts
//category Seeder
categoryController.seedCategory()

```

# Relation maa vaako tables lai join garni tarikaa::
```ts
  //getAllProduct:::::::::;
    async getAllProducts(req:Request, res:Response):Promise<void>{
        const data = await Product.findAll({
            include : [
                {//yesle user ra product lai join garxa...
                    model : User, //yo code ley k garyo vandaa product vanni maa sabai kuraa find garyo ra tyo find gareko data maa kunai kura user table sanga relation maa xa vane product table lai user table sanga join garidiyo. yesto gardaa kun product ko user ley create gareko ho sabai nikalna sakni vayim hamile.
                    attributes : ['email', 'username'] //model : User ley sabai kura dini vayo tara if hamilai tyo product create gareko user ko email matra chhiyo yaa kei specific kuraharu chhiyo vani attribute use garna sakxau.
                },
                {//yesle product ra category lai join garxa...
                    model : Category,
                    attributes : ['categoryName']
                }
            ]
        }) //return array
        res.status(200).json({
            message : "Products fetched Successfylly",
            data : data
        })

    }
}
```
- Now, CRUD of Products and CRUD of Category garni.
- CRUD of products in side productcontroller.ts and
- CRUD of category in side categorycontroller.ts and making a route in categroyRoute.ts and importing it in app.ts.

# Add to cart: 
- first make cart.ts file and write code.
- then make relationship between product,cart and user in connection.ts like  :::
```ts
//For cart:::::::::::::::::::::::::::
//product-cart relation
User.hasMany(Cart, {foreignKey : 'userId'})
Cart.belongsTo(User,{foreignKey : 'userId'})

//user-cart relation
Product.hasMany(Cart, {foreignKey : 'productId'})
Cart.belongsTo(Product, {foreignKey : 'productId'})
```
-now, make a controller to take data from the frontend and insert into the cart table.

- make a cartController.ts and write code of cartCrud.
- make a cartRoute.ts and make a route of cart.
- finally import it on app.ts file.


# Checkout feature :
-There is proceed to checkout button, when clicking on checkout button some operation is performed, so to do this, we have to make a 3 table like:

- Order table => id, phone number, shippingAddress, total amount and orderStatus and paymentid(come from relation)

- payment table => id, paymentMethod, paymentStatus, pidx

- order details table => id, quantity, orderId, productId(orderid and productid come from relation)

- make payment.ts, order.ts and orderDetails.ts file inside model and write a code to make table. then, make a relation inside connection.ts file like::::
```ts
//orderDetail-order relation
Order.hasMany(OrderDetail, {foreignKey : 'orderId'})
OrderDetail.belongsTo(Order, {foreignKey : 'orderId'})

//orderdetails-product relation
Product.hasMany(OrderDetail, {foreignKey : 'productId'})
OrderDetail.belongsTo(Product,  {foreignKey : 'productId'})

//orders-payment relation
payment.hasOne(Order, {foreignKey : 'paymentId'})
Order.belongsTo(payment, {foreignKey : 'paymentId'} )
```
- Then ckeck the table.






















//to start Xampp on MAc:
sudo /Applications/XAMPP/xamppfiles/xampp start




# Problem to ask:::
- Problem in admin seeder like when i migrate database, admin seeder gives error. sabai database delete garepaxi feri banaudaa admin seeder maa galti aauxa.
- problem in multer.(productroute.ts)