//requiring express
const express = require('express')
const app = express()

//requiring mongoose
const connectToDatabase = require('./database')
const Book = require('./model/bookmodel')
connectToDatabase()

//this line is important that express itself cannot handle json so we have to tell express to understand it.
app.use(express.json())
//if we are using ejs in nodejs , we have to write this urlencoded line and neglect the express.json() line.
app.use(express.urlencoded({extended : true}))


app.get('/',(request,response) => {
    // response.send("Hello World"); //res.send garnu vanda res.json garnu better hunxa kinaki json is valid in all languages, which is benefecial.(more on notes.)

    // response.json({
    //     "message": "success"
    // })

    //yesari response sangai status pani dekhauna milyo.
    response.status(200).json({
        "message": "success"
    })
})



//CREATE API::
app.post('/book',async (req,res) => {
    // console.log(req);
    // console.log(req.body);
    // const bookPrice = req.body.bookPrice;
    // const bookName = req.body.bookName;

    //Destructuring:
    const {bookName, bookPrice, isbnNumber, authorName, publishedAt, publication} = req.body;
    await Book.create({
        //in js, if key and value name is same, we can write only one.
        bookName : bookName,
        bookPrice : bookPrice,
        isbnNumber : isbnNumber,
        authorName : authorName,
        publishedAt : publishedAt,
        publication : publication
    })
    res.status(201).json({
        "message" : "book created successfully"
    })
})



//All READ API:::
app.get("/book",async(req,res) => {
    const books = await Book.find() //return array maa garxa
    res.status(200).json({
        "message" : "books fetched successfully",
        data : books
    })
})



//Single read Api::
app.get("/book/:id",async (req,res) => { // here :id is dynamic but only id is static.
    try {
        //console.log(req.params.id); //body maa aako xa vani req.body garda vayo tara url bata aai rako xa ni ta parameter vayera id, tei vayera req.params.id gareko.
    const {id} = req.params //destructure garera specific book ko id aayo aba.
    
    const book = await Book.findById(id) //hamisanga id ta aayo aba Book maa find by id garnu paryo. And findbyId returns object.
    res.status(200).json({
        "message" : "single book fetched successfully",
        "data" : book
    })
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong"
        })
    }
})








app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

