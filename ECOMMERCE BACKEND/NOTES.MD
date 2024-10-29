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

- Make a model folder and inside that, make a index.ts file where the db related code is written. This code connects to a MySQL database with Sequelize and checks if the connection is successful. It also sets up an object to manage the Sequelize library and instance.

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














//to start Xampp on MAc:
sudo /Applications/XAMPP/xamppfiles/xampp start