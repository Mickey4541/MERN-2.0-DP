


const mongoose = require("mongoose")

const connectionString = "mongodb+srv://rajan:rajan@cluster0.4c60z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


//It is asynchronous task, so it takes time, so async await.
async function connectToDatabase(){
    await mongoose.connect(connectionString)
    console.log("Connection to database successfully.");
}

module.exports = connectToDatabase