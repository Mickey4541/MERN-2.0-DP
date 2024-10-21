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
