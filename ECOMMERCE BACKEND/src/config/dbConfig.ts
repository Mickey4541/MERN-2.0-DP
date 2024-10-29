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