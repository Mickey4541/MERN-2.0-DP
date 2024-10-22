const mongoose = require("mongoose");


//a schema defines the structure of the documents within a MongoDB collection, including field names, types, validation rules, and default values.it is a constructor function provided by the Mongoose library. It allows you to define the structure of documents within a MongoDB collection.When you create a new schema using new mongoose.Schema(), you are invoking this constructor function to create a new schema object.
const bookSchema = new mongoose.Schema({
    bookName: {
        type : String,
        unique : true
    },
    bookPrice : {
        type : String
    },
    isbnNumber : {
        type : Number
    },
    authorName : {
        type : String
    },
    publishedAt : {
        type : String
    },
    publication : {
        type : String
    }
})

const Book = mongoose.model('Book', bookSchema)// model is like a table of sql in mongodb, here we are telling that make a Book table/Model and the columns/fields inside it are bookschema. yaha hamile book model banako xam, collection maa chai books banxa name.

module.exports = Book

//jaba samma banako table/model maa operation hudaina taba samma model collection maa dekhidaina.
