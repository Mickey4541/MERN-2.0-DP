"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    db: 'mern2ecommercedatabase',
    dialect: 'mysql',
    pool: {
        idle: 10000,
        max: 5,
        min: 0,
        acquire: 10000
    }
};
exports.default = dbConfig;
/*
The pool settings control database connections:

- idle: Time (in ms) a connection can be idle before closing.
- max and min: Maximum and minimum number of connections allowed.
- acquire: Time (in ms) to wait for a connection before timing out.
- These help manage connection use and efficiency.
 */ 
