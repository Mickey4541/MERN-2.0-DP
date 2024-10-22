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
            "message" : "Something went wrong"
        })
    }
})





//Delete API::: 
// app.get("/book", async (req,res) => {
//     const id = req.params.id
//     await Book.findByIdAndDelete(id) //teturn null because it is delted.
//     res.status(200).json({
//         "message" : "Book Deleted successfully"
//     })
// })
// here the api of delete and all read api is same. and the get method can be done in browser. which is dangerous like it can have a loophole of csrf attack.
//So, the developers intorduce delete method again.
app.delete("/book/:id", async (req,res) => {
    const id = req.params.id
    await Book.findByIdAndDelete(id) //teturn null because it is delted.
    res.status(200).json({
        "message" : "Book Deleted successfully"
    })
})



//Update API::PATCH AND PUT but PATCH is optimized
//update garda kun id ko book update garni ho tesko id ni params bata pathauna paryo ra tyo id ko book maa k update garni ho tyo chai body maa pathauna paryo

app.patch("/book/:id",async (req,res)=>{
    const id = req.params.id //kun book update garni ko id ho yo
    const{bookName, bookPrice, authorName, publication, publishedAt,isbnNumber} = req.body
    await Book.findByIdAndUpdate(id, { //findbyId ley 3 ota parameter linxa,first kun id ko update garni ra, second chai k update garni. (second param chai object maa linxa), third is validator
        //key and value same vayo vani aauta matra lekhdaa hunxa.
        bookName : bookName, //bookName vanni key/column maa frontend bata aako bookName lagera haleday vaneko.
        bookPrice : bookPrice,
        authorName: authorName,
        publishedAt :publishedAt,
        publication : publication,
        isbnNumber : isbnNumber
    })
    res.status(200).json({
        "message" : "Book Updated Successfully"
    })
})







app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

