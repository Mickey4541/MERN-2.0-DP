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








//to start Xampp on MAc:
sudo /Applications/XAMPP/xamppfiles/xampp start