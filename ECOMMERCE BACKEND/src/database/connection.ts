
import { Sequelize } from "sequelize-typescript";
import productController from "../controllers/productController";

import User from "./models/userModel";
import Product from "./models/productTableModel";
import Category from "./models/Category";


const sequelize = new Sequelize({
    database : process.env.DB_NAME,
    dialect : 'mysql',
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    port : Number(process.env.DB_PORT),
    models : [__dirname + "/models"] //models for table. ani database ko tables ko code kaa hunxa vanera vannu paryo. models ko code current directory(connection.ts vaneko ho __dirname vanya) and models folder bhitra tables ko code hunxa vaneko.
})
sequelize.authenticate().then(() => {
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.log(err);
})

sequelize.sync({ force: false }).then(() => {
    console.log("Synced");
}).catch((error) => {
    console.error("Error syncing models:", error);
});

//Relationship to connect tables
//Relationship between user and product
// User.hasMany(Product)
// Product.belongsTo(User)
User.hasMany(Product, {foreignKey : "userId"})
Product.belongsTo(User, {foreignKey : "userId"})


//Relationship between categories and product.
Product.belongsTo(Category, {foreignKey : 'categoryId'})
Category.hasOne(Product, {foreignKey : 'categoryId'})


export default sequelize