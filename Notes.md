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


# Initializing NOdejs / Setup:::
(npm, yarn, pnpm etc are some methods but we use npm(node package manager.))::

- Make a folder and open it in terminal or vs code.
- npm init
- package name: just enter or you can give a preferred name.
- version: simply enter(we can make changes later.)
- description: simply enter
- main: simply enter
- test command: simply enter
- github repo: simply enter
- keyword: simply enter
- author: simply enter
- license: simply enter
- then press enter
- We have now package.json which is basically a file which describes our project. like about what project, author of project, name of project etc.



- Make a app.js file which is the main file in nodejs.(making app.js is convention, we can give any other name).

- NPM is a container from where we install various packages needed in our project. It is very big container from where we can install various packages needed.

- Express.js is a fast, minimal, and flexible web application framework for Node.js. It simplifies building web applications and APIs by providing robust features for handling HTTP requests, routing, and middleware. So, we first need express. we can install it from the npm container by: npm install express.

#  NPM ko package ko versioning kasto hunxa??
- It is a semantic versoning like::( in this project we use express 2.21.1)(major.minor.patch).

# Express:
- After installing express:: Inside app.js, we have to require it:
::::::const express = require('express')
::::::const app = express()


# Port Number::
- Port numbers are ranges from 0-65535 inside our computers. The default port number of mysql is 3306. Think like a hotel where there is different rooms. One room is for one person and other people cannot access that room at that same time. Allocate vaisakeko room leave na hudaa samma aru ley use garna paudaina. same like that: we initialize port 3000 in nodejs. To do this: inside app.js we write :
        app.listen(3000,()=>{
            console.log("Nodejs server has started at port 3000")
        })
- localhost:3000 === 127.0.0.1:3000
- Here we get cannot get / in browser. 

# using / ::
- By writing this, now we get hello world in browser.
        app.get('/',(request,response) => {
            response.send("Hello World");
        })

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
        response.send("Hello World");
    })
    ```

