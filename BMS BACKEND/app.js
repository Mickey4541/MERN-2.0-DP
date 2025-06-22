//requiring express
const express = require('express')
const app = express()
const fs = require('fs')



//requiring mongoose
const connectToDatabase = require('./database')
const Book = require('./model/bookmodel')
connectToDatabase()



//multerConfig imports
// const multer = require("./Middleware/multerConfig").multer
// const storage = require("./Middleware/multerConfig").storage
//Destructuring:
const {multer,storage} = require("./Middleware/multerConfig")
const upload = multer({storage : storage})

// CORS PACKAGE REQUIRING::
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:5173'], // allow multiple origins
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true // if using cookies or auth headers
}));



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
app.post('/book',upload.single("image"), async (req,res) => {
    console.log(req.file);
    
    // console.log(req);
    // console.log(req.body);
    // const bookPrice = req.body.bookPrice;
    // const bookName = req.body.bookName;
    let fileName;
    if(!req.file){
        fileName = "https://media.istockphoto.com/id/529239795/vector/no-image-signs-for-web-page.jpg?s=612x612&w=0&k=20&c=U3FvupU1VFGiIx5A2K8i79bm-L6bZyeSVUAt8THf_xs="
    }
        else{
        fileName = "http://localhost:3000/" + req.file.filename
    }

    //Destructuring:
    const {bookName, bookPrice, isbnNumber, authorName, publishedAt, publication, bookDescription} = req.body;
    await Book.create({
        //in js, if key and value name is same, we can write only one.
        bookName : bookName,
        bookPrice : bookPrice,
        isbnNumber : isbnNumber,
        authorName : authorName,
        publishedAt : publishedAt,
        publication : publication,
        imageUrl : fileName,
        bookDescription : bookDescription
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
        data : books //frontend bata access gardaa response.data.data garnu paryo.
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
// app.delete("/book/:id", async (req,res) => {
//     const id = req.params.id
//     await Book.findByIdAndDelete(id) //teturn null because it is delted.
//     res.status(200).json({
//         "message" : "Book Deleted successfully"
//     })
// })

// >>>>>>>>>>>>>>>>>>>>>>>> code with image deletion also >>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.delete("/book/:id", async (req, res) => {
    try {
        const id = req.params.id;

        // Find the book by its ID
        const book = await Book.findById(id);

        // Check if the book exists
        if (!book) {
            return res.status(404).json({
                "message": "Book not found"
            });
        }

        // Retrieve the image URL from the book
        const oldImageUrl = book.imageUrl;

        // Check if the image is stored locally and delete the image file
        if (oldImageUrl.startsWith("http://localhost:3000/")) {
            const localHostUrlLength = "http://localhost:3000/".length;
            const imagePath = oldImageUrl.slice(localHostUrlLength); // Strip the localhost part
            fs.unlink(`storage/${imagePath}`, (err) => {
                if (err) {
                    console.log("Error deleting file: ", err);
                } else {
                    console.log("File deleted successfully.");
                }
            });
        }

        // Delete the book from the database
        await Book.findByIdAndDelete(id);

        // Respond with success message
        res.status(200).json({
            "message": "Book and associated image deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            "message": "Something went wrong",
            "error": error.message
        });
    }
});

// >>>>>>>>>>>>>>>>>>>>>>>> code with image deletion also >>>>>>>>>>>>>>>>>>>>>>>>>>>>











//Update API::PATCH AND PUT but PATCH is optimized
//update garda kun id ko book update garni ho tesko id ni params bata pathauna paryo ra tyo id ko book maa k update garni ho tyo chai body maa pathauna paryo

app.patch("/book/:id",upload.single("image"), async (req,res)=>{
    const id = req.params.id //kun book update garni ko id ho yo
    const{bookName, bookPrice, authorName, publication, publishedAt,isbnNumber, bookDescription} = req.body
    //Aba image pani update garna milni banauna ko lagi upload.single("imageUrl") ta grana parihalyo. Tespaxi image update gardaa pahile upload vaisakeko image lai track garera delete ni garnu parxa. tesko lagi image ko id find garera oldDatas vanni variable maa rakheko ho:
    const oldDatas = await Book.findById(id)
    //hamisanga old image utl maa localhost ko link pani xa. teslai slice garera feri new oldimage path access garim. aba yo if(req.file) lekhisakepaxi nodejs ko filesystem fs require garni. filesystem require garisakepaxi aba hamile filesystem(storage folder in our case) bata kei kura delete garna paryo vani filesystem use garnu paryo.We have fs.unlink() to delete
    let fileName;//yo line chai file delete vaisakepaxi ko ho database maa naya update vako image halna ko lagi.
    if(req.file){
    //console.log(req.file);
    //console.log(oldDatas);
    const oldImagePath = oldDatas.imageUrl
    //console.log(oldImagePath);
    const localHostUrlLength = "http://localhost:3000/".length
    const newOldImagePath = oldImagePath.slice(localHostUrlLength)
    //console.log(newOldImagePath);
    fs.unlink(`storage/${newOldImagePath}`,(err) => {
        if(err){
            console.log(err);
        }else{
            console.log("File Deleted Successfully");
        }
    })
    fileName = "http://localhost:3000/" + req.file.filename;//aba localhost url append garera naya updated image aako lai filename maa store garim.

}else{
    fileName = oldDatas.imageUrl;
}
    await Book.findByIdAndUpdate(id, { //findbyId ley 3 ota parameter linxa,first kun id ko update garni ra, second chai k update garni. (second param chai object maa linxa), third is validator
        //key and value same vayo vani aauta matra lekhdaa hunxa.
        bookName : bookName, //bookName vanni key/column maa frontend bata aako bookName lagera haleday vaneko.
        bookPrice : bookPrice,
        authorName: authorName,
        publishedAt :publishedAt,
        publication : publication,
        isbnNumber : isbnNumber,
        imageUrl : fileName, //yo chai update vayera aako image mathi filename variable maa baseko xa, teslai imageUrl vanni column maa haldeko jasle database maa image update garxa naya aako image.
        bookDescription : bookDescription
    })
    res.status(200).json({
        "message" : "Book Updated Successfully"
    })
})







//By default nodejs didn't give access to see the files of its codebase. tara hamile database maa rakheko image files haru frontend maa dekhauna parni xa ra koi user ley request garyo vani dekhauna parni xa. frontend developer ley pani ta frontend develop garda access magxa. so hamile nodejs lai yo sabai access dey hai vanna ko lagi yo code. simply:
// app.use(express.static("./storage/")) serves static files (like images, CSS, or JavaScript) from the ./storage/ folder, making them accessible via URLs. This allows users to access files stored in that directory directly through the browser.
app.use(express.static("./storage/")) //./storage folder bhitra ko file ko access matra diyeko.


app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

