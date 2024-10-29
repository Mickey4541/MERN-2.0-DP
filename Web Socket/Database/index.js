const mongoose = require('mongoose')

async function connectToDatabase(){
    await mongoose.connect('mongodb+srv://rajan:rajan@cluster0.xb0sf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    
    console.log('Database connected successfully');
    
}
module.exports = connectToDatabase