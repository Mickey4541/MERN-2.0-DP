//requiring express
const express = require('express')
const app = express()

//requiring mongoose
const connectToDatabase = require('./database')
connectToDatabase()




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












app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

