"use strict";
//our medium to connect with the database is sequelize.so, we have to import it. It gives Sequelize class and DataTypes. DataTypes means (hamile hamro db table ko columns ko datatypes k rahhni ho like integer, string vanni chij DataTypes bata aauxa. ) and Sequelize to do instantiation.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
//In Sequelize, an instance is an object created from a class (in this case, the Sequelize class). When you write const sequelize = new Sequelize(...), you're creating an instance of the Sequelize class with your database configuration.
const sequelize = new sequelize_1.Sequelize(dbConfig_1.default.db, dbConfig_1.default.user, dbConfig_1.default.password, {
    host: dbConfig_1.default.host,
    dialect: dbConfig_1.default.dialect,
    port: 3306,
    pool: {
        acquire: dbConfig_1.default.pool.acquire,
        min: dbConfig_1.default.pool.min,
        max: dbConfig_1.default.pool.max,
        idle: dbConfig_1.default.pool.idle
    }
});
//authenticate is a method of the Sequelize instance (object) that checks if the connection to the database is successful.
// sequelize.authenticate() returns a promise that resolves if the connection is successful and rejects if there’s an error.
// .then() handles the resolved state of the promise, logging "Connected."
// .catch() handles any rejection (error), logging the error message.
sequelize.authenticate().then(() => {
    console.log('Connected');
})
    .catch((err) => {
    console.log(err);
});
// there is a db object and inside this, there is a two key value pair. The db object holds the Sequelize library and its instance together. This makes it easy to manage database connections and models in your application.
const db = {};
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({ force: false }).then(() => {
    console.log("Migrated Successfully");
});
exports.default = db;
