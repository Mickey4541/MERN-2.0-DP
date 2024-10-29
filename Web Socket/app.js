// const express = require("express");
// const { on } = require("nodemon");
// const app = express()
// const {Server} = require('socket.io')//Server vanni class diraako hunxa.



// const server = app.listen(3000, () => {
//     console.log("Server has started at port 3000");
// })

// const io = new Server(server
//     //cors: '' second argument aahile chaidaina kinaki hami postman use gardai xam, if react(frontend) maa chai chhiyo.
// )


// io.on('connection', (socket) => { //socket ko through bata hami connect vaim postman bata, connect vayepaxi jo connect vako tesko information socket maa aai rako hunxa.
//     // console.log(socket.id);

//     // socket.on('sendData', (data)=>{//sendData is event name.
//     //     console.log(data);
//     //     if(data){
//     //         socket.emit("response", "Data received in server")
//     //     }


//     // })
//     // //emit msg to specific user.
//     // socket.emit('hello',{// hello is eventname
//     //     greeting: 'Hello from server'
//     // })

//     // //emit msg to all the user.
//     // socket.emit('hello',{// hello is eventname
//     //     greeting: 'Hello from server'
//     // })

//     // //emit msg to sprcific user from specific id.
//     // io.to(socket.id).emit('hello',{// hello is eventname
//     //     greeting: 'Hello from server'
//     // })



//     // console.log('Web Socket connected');
//     // // socket.on("disconnect", () => {
//     // //     console.log("User Disconnected");

//     // // })

//     socket.on("message", (data)=>{
//         console.log(data);
//         if(data){
//             socket.emit('message', "Data received in server");

//         }

//     })
// })

// //............................................
// // on = > client/frontend ley data pathayo teslai lina ko lagi (data receive gardaa)

// // emit => sending dat from server to client


// //aba server bata kei msg dina ko lagi kunai specific user lai msg dina ko lagi socket.emit use garni and if jati pani connected user xan sabailai ekpatak msg dina man xa vani io.emit garni.

// // on=listen



// //Client to server::
// //.on(): The server listens for specific events sent by the client.

// //server to client::::
// //.emit(): The server sends data to the client.


//............................................................................................................................................................................................................................................................................

// rajan
// razzanbhandari4541
// qgIvECdASCc21njp
//mongodb+srv://rajan:<db_password>@cluster0.xb0sf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



const express = require("express");
const app = express()
const { Server } = require('socket.io')//Server vanni class diraako hunxa.

const connectToDatabase = require("./Database/index");
const Book = require("./model/bookModel");
connectToDatabase()

const server = app.listen(3000, () => {
    console.log("Server has started at port 3000");
})

const io = new Server(server)

//CRUD::
io.on('connection', (socket) => {
    console.log('User Connected');

    //createBook::::::::::::::::::::::::::::::::::
    socket.on('addBook', async (data) => {
        //console.log(data);
        try {
            if (data) {
                const { bookName, bookPrice } = data
                const newBook = await Book.create({
                    bookName: bookName,
                    bookPrice: bookPrice
                })
                socket.emit("response", { status: 200, message: 'Book created Successfully', data: newBook })
            }
        } catch (error) {
            socket.emit("response", { status: 500, message: "something Went Wrong" })
        }
})
//getBooks::::::::::::::::::::::
socket.on("getBooks", async () => {
    try {
        const books = await Book.find()
        console.log(books);
        
        socket.emit("response",{status: 200, message: "Books fetched Successfully", data: books} )
    } catch (error) {
        socket.emit("response", {status: 500, message: "Something went wrong"})
    }
})
    //update Book::::::::::::
    socket.on("updateBook", async (data)=>{
        try {
            if(data){
                const {bookName, bookPrice, bookId} = data
                const updatedBook = await Book.findByIdAndUpdate(bookId, {// j id aako xa tei book lai update gareko
                    bookName: bookName,
                    bookPrice: bookPrice
                },{
                    new : true //j update vayo tei book response maa janxa frontend maa.
                })
                socket.emit("response",{status: 200, message: "Book updated Successfully", data: updatedBook} )
            }
        } catch (error) {
            socket.emit("response", {status: 500, message: "Something went wrong"})
        }
    })

    //delete Book:::::::::::::::::::::::::::::::::::::::::::
    socket.on("deleteBook", async (data) => {
        try {
            const {bookId} = data
            await Book.findByIdAndDelete(bookId)
            socket.emit("response", {status: 200, message: "Book Deleted Successfully"})
        } catch (error) {
            socket.emit("response", {status : 500, message: "Something Went Wrong"})
        }
    })
})