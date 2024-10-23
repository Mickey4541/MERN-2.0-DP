# How Website Works?

> **Frontend:**
> - UI + interaction + taking input from the server and showing the data to the user (Client). React, Vue, Angular, Svelte. We cannot directly interact with the database with frontend technologies.

> **Backend:**
> - Taking data from the frontend and interacting with the database. It can retrieve data and store data from the database. It fulfills the valid requests coming from the frontend. PHP, Node.js (runtime environment), Laravel, .NET, Django, Spring, Spring Boot.

> **Framework:**
> - All in one bundle. A framework is like a full recipe—it tells you how to cook and gives you all the tools you need to follow it. Like a kitchen. E.g., Vue.js, Angular, Django, Ruby on Rails, etc.

> **Library:**
> - A library is like a toolbox—you choose which tools to use when you need them, and you're in control. E.g., React, NumPy, TensorFlow.

> **API:**
> - Application Programming Interface. 
> - It helps to connect frontend and backend. It is just like a bridge or a waiter in a restaurant. APIs are developed by the backend developer. We can send and receive data through API.

> **Database:** 
> - **SQL**: 
>   - MySQL (ORM - Object Relational Model - Sequelize), PostgreSQL, SQLite (stores data in tables).
>   - Best for those who need readability, ER-diagrams, and for making vast relationships, etc. Database migration is needed if we want to make SQL database scalable.
> 
> - **NoSQL**: 
>   - MongoDB (ODM - Object Data Modeling - Mongoose), Cassandra (stores data in the form of objects).
>   - For scalable, file handling sites, video handling sites, etc.

> **HTTP Verbs:**
> - **GET**: Getting data from the database (magnu paryo vani).
> - **POST**: Sending the data (kehi kura pathauna ra dina paryo).
> - **PATCH/UPDATE**: Doing some specific update like name inside a row and column.
> - **PUT**: Doing update at once (ekipatak sabai update garnu paryo) updating all details of a user (name, email, phone number, etc.) at once.
> - **DELETE**: Deleting the data.

> **HTTP Status Codes:**
> - **1XX** => Informational
> - **2XX** => Success
> - **3XX** => Redirect
> - **4XX** => Client Error (not found)
> - **5XX** => Server/Internal/Hosting Error (too many errors)
> - It is like a S.I. unit (International System of Units).

# Intro to Node.js::

> - **Founder**: Ryan Dahl
> - **Definition**: Node.js is a runtime environment that allows us to run JavaScript on the server side. It provides the necessary tools and libraries to execute JavaScript outside of a web browser.
> - **Runtime**: It represents the state from start to end of the execution process.



# Initializing Node.js / Setup:::
(npm, yarn, pnpm etc are some methods but we use npm (node package manager.))::

- Make a folder and open it in terminal or VS Code.
- Run the command: `npm init`
- Package name: just enter or you can give a preferred name.
- Version: simply enter (we can make changes later.)
- Description: simply enter
- Main: simply enter
- Test command: simply enter
- GitHub repo: simply enter
- Keyword: simply enter
- Author: simply enter
- License: simply enter
- Then press enter.

We now have `package.json` which is basically a file that describes our project. Like about what project, author of the project, name of the project etc.

- Make an `app.js` file which is the main file in Node.js (making `app.js` is a convention, we can give any other name).

- NPM is a container from where we install various packages needed in our project. It is a very big container from where we can install various packages needed.

- Express.js is a fast, minimal, and flexible web application framework for Node.js. It simplifies building web applications and APIs by providing robust features for handling HTTP requests, routing, and middleware. So, we first need Express. We can install it from the npm container by: 
    ```bash
    npm install express
    ```

# NPM ko package ko versioning kasto hunxa??
- It is a semantic versioning like: (in this project we use express 2.21.1) (major.minor.patch).

# Express:
- After installing Express: Inside `app.js`, we have to require it:
    ```javascript
    const express = require('express')
    const app = express()
    ```

# Port Number::
- Port numbers range from 0-65535 inside our computers. The default port number of MySQL is 3306. Think like a hotel where there are different rooms. One room is for one person, and other people cannot access that room at that same time. Allocate vaisakeko room leave na hudaa samma aru ley use garna paudaina. Same like that: we initialize port 3000 in Node.js. To do this, inside `app.js` we write:
    ```javascript
    app.listen(3000, () => {
        console.log("Node.js server has started at port 3000")
    })
    ```

- `localhost:3000` === `127.0.0.1:3000`

- Here we get "Cannot GET /" in the browser. 

# Using / ::
- By writing this, now we get "Hello World" in the browser:
    ```javascript
    app.get('/', (request, response) => {
        //console.log(request);
        response.send("Hello World");
    })
    ```


# Request Response Cycle:::
- From browser we make request, and server gives us response.
- Inside app.get, the order matters. first is always request and second is always response. like here:
```javascript
    app.get('/', (request, response) => {
        //console.log(request);
        response.send("Hello World");
    })
```

- Browser can handle get request but we have different api like put, patch and delete. Browser cannot handle this solo. so, we need postman.

- We can use extension like thunder client from vs code as a alternative of postman. Just install it in vs code and same as postman to run.

- Now we can test it in postman by entering http://localhost:3000/ through get method. Make sure to select body raw and json in postman.

## Using Nodemon or `--watch`

- Node.js 18.10 version or above that version to use watch. "--watch" feature.
- To install nodemon: 
  ```bash
  npm install nodemon
  ```
  or 
  ```bash
  npm install nodemon -g
  ```
- After installing nodemon, inside package.json and inside scripts, write:
  ```json
  "start": "nodemon app.js"
  ```
  and save.
- Now, inside terminal: type:
  ```bash
  npm start
  ```
- Now, whenever we change in our code, the server will automatically got started.
- And to use watch flag, simply write:
  ```bash
  node --watch app.js
  ```

## What if I write `rajan` instead of `start` inside `package.json` to run nodemon?

- We have to type:
  ```bash
  npm run rajan
  ```
- If we write start, we can simply write:
  ```bash
  npm start
  ```
  to run the server.

## JSON

- JavaScript Object Notation stores data and transfers the stored data.
- JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is primarily used for transmitting data between a server and a web application or between different parts of an application.
- It's better to use `res.json()` over `res.send()` when sending data, as JSON is more universally accepted and standardized across different languages and platforms.
- We can also send status codes with JSON responses:
  ```javascript
  response.status(200).json({
      "message": "success"
  });
  ```

## Connecting MongoDB

- Log in into mongodb.com. Using a mongodb atlas for database, make a project, create a cluster and there you see a connect button, click on connect, click on driver button and you can see a connection string there like this:
  ```bash
  mongodb+srv://<username>:<db_password>@cluster0.4c60z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  ```
- The tag you are seeing `<db_password>` should be replaced by the actual password you have created while creating a project.


## Understanding SQL CRUD and Sequelize CRUD

### SQL CRUD Operations

- **CREATE**: Insert data into the users table
  ```sql
  INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30);
  ```

- **READ**: Select all users with age greater than or equal to 18
  ```sql
  SELECT * FROM users WHERE age >= 18;
  ```

- **UPDATE**: Update a user's email where their id is 1
  ```sql
  UPDATE users SET email = 'newemail@example.com' WHERE id = 1;
  ```

- **DELETE**: Delete a user where their id is 1
  ```sql
  DELETE FROM users WHERE id = 1;
  ```



### Sequelize CRUD Operations

- **CREATE**
  ```javascript
  User.create({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });
  ```

- **READ**
  ```javascript
  User.findAll({
    where: {
      age: { [Op.gte]: 18 }  // greater than or equal to 18
    }
  });
  ```

- **UPDATE**
  ```javascript
  User.update(
    { email: 'newemail@example.com' },  // Update the email
    { where: { id: 1 } }  // Where id is 1
  );
  ```

- **DELETE**
  ```javascript
  User.destroy({
    where: { id: 1 }  // Delete where id is 1
  });
  ```

## Understanding Mongoose

- Mongoose is a npm package. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. Just like sequelize in SQL, there is moongoose in Mongodb. We can say mongoose as a agent between mongodb database and nodejs. If we need a data from db, we can tell moongoose to bring and also can send data to store in database through mongodb. The connection string is also handover to moongoose and it try to connect our nodejs with database. Simply if we have to make a query, we do it with the help of mongoose.

- To install mongoose: npm install mongoose.

- make a folder database and make a file index.js or any name and put the database connection function code.

- we have to require it at index.js::: const mongoose = require("mongoose")

- another is connectionString = "connecting string from mongodbatlas" inside index.js (but do it in .env folder)

 # IMPORTANT:::::
 > inside the mondodb website:: inside network access :: there is a button called add ip address:: we should add 0.0.0.0/0 to give access to all the ipv4 address. because all these router and wifi turnoff the dhcp assign each time a ip address to each device. if we dont do this, the connection string refuses to connect our nodejs app with the database. This type of error if we get,is a whitelist ip error.



# importing and Exporting modules.
- 'module.exports' for exporting file and 'require' to importing file is a common js system/convention. like we do in nodejs here.

- But  ' import from ' to import file and 'export default' to export file like in react is es(ecma script) system.



# Project Details::
- Book management system:
- CRUD, file/image handeling.
- In sql, there is column but in nosql there is field.
- In sql, there is table but in no-sql there is collection.

> make a model folder and make a bookModel.js folder.
- Inside bookModel.js, require mongoose.
- Create a schema called bookSchema.
- Now inside app.js, make a /book post request and try it by postman.
- From postman, inside body>raw>json bata hamile data pathauna paryo because hamile frontend banako xainam. tei body lai frontend/form samjhera data pathauna paryo.
> IMPORTANT: hamile pathako data(text format)sadhai req.body maa aako hunxa. ra file xa vani req.file maa aako hunxa.

- Making book Model done, making model/table of book also done, and inside app.js, writing this below /book code and sending a json data from body of postman also done:
```javascript
  app.post('/book',(req,res) => {
    console.log(req);
    console.log(req.body);
    console.log(req.body.bookPrice);
})
```
- Now, inside the vs code console, we got undefined instead of getting a data send through postman. this is because express didn't understand that data. So, we have to tell express to understand and parse the json by::::
```bash
  # this line is important that express itself cannot handle json so we have to tell express to understand it.
  app.use(express.json())
  # if we are using ejs in nodejs , we have to write this urlencoded line and neglect the express.json() line.
  app.use(express.urlencoded({extended : true}))
```

- The data is stored in BSON format, not JSON. While MongoDB accepts and returns data in JSON-like format, it actually stores that data in BSON, which stands for Binary JSON.

# CRUD in NODE AND MONGODB USING MONGOOSE:
- create :: Book.create()
- Read :: Book.find()
- single Read :: Book.findById()
- Update :: findbyIdaAndUpdate()
- Delete :: findByIdAndDelete()

# Question: I open a chrome browser and open two tabs. I login in facebook in first and in second tab, i open any other app. Can a first tab can access the cookie and data of second tab or vice versa?
- No, cannot access because of the feature of sandboxing.

# After CRUD::CRUD code lekhi sake paxi continue aba:::
# REST API and RESTFUL API:::
- Standards to make api.
> Restapi :: (following the different path of each api)
 - Get book : /getAllBooks > get
 - Delete Book : /delete/:id > delete
 - update book : /update/:id > patch
 - single book : /single/:id > get

> RESTFUL API :(following the same path for each api):(Recommended)
 - Get book : /book (POST)/Create
 - Get book : /book (GET)/All read
 - Delete Book : /book/:id > delete
 - update book : /book/:id > patch
 - single book : /book/:id > get

 # File handeling using multer:
 - Multer is a third party package. It is a middleware. nodejs didn't understand the file . It only understand the textual content only in json format. To install it : 
 - npm i multer.
 - make a middleware folder and make a multerConfig.js file.
 - copy the whole code of multerconfig from multerconfig.js and paste in multerconfig.js
 - then, in the create api , inside app.js, write upload.single("imageUrl) wala line like:
 ```javascript
 app.post('/book',upload.single("imageUrl"), async (req,res) => {

- In upload.single, if we have to post a lot of images, we can do upload.array.

- Inside app.js requiring multer like this::
```javascript
//multerConfig imports
// const multer = require("./Middleware/multerConfig").multer
// const storage = require("./Middleware/multerConfig").storage
//Destructuring:
const {multer,storage} = require("./Middleware/multerConfig")
const upload = multer({storage : storage})
```

- Multer intercept the request of files coming from client between the client and server and stores it in own storage. and then it forward the file toward server.

- Inside bookmodel.js, make a column like this:
 imageUrl : {
        type : String
    }
- And inside app.js: In create api write this::
          imageUrl : req.file.filename

# Important:::::::
> //By default nodejs didn't give access to see the files of its codebase. tara hamile database maa rakheko image files haru frontend maa dekhauna parni xa ra koi user ley request garyo vani dekhauna parni xa. frontend developer ley pani ta frontend develop garda access magxa. so hamile nodejs lai yo sabai access dey hai vanna ko lagi yo code. simply:
// app.use(express.static("./storage/")) serves static files (like images, CSS, or JavaScript) from the ./storage/ folder, making them accessible via URLs. This allows users to access files stored in that directory directly through the browser. code is::
```javascript
app.use(express.static("./storage/"))
```

- we can manually check in browser.
- http://localhost:3000/storage/filename(not showing image)


- http://localhost:3000/filename  (shows image only after adding above express.static code). yo line maa storage kina hatako vani tyo hamile code maa vanisakeko xam ki storage folder bhitra ko file ko access dey vanera.


> yaha ::app.use(express.static("./storage/")) :::yo code maa ./storage/ vaneko storage folder bhitra ko file haru matra access dini vaneko. if mistake ley hamile ./ lekhera xodim vani tyo aauta loophole vayo jaha bata hacker ley access pauna sakyo. try garda vayo browser maa.

