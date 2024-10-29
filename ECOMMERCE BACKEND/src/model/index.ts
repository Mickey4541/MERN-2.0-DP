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