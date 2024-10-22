const multer = require("multer");

const storage = multer.diskStorage({
    destination : function (req, file, cb){ ///cb means callback
        //logic to validate the filetype(mimetype)
        // const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']
        // if(!allowedFileTypes.includes(file.mimetype)){
        //     cb(new Error("Invalid file type. Only Supports png, jpeg and jpg."))//cb(error)
        //     return;
        // }
        //if filesize pani validate garnu pare, if file.size>2346........yesari gardaa hunxa
        //console.log(file.mimetype);
        
        cb(null, "./storage");//cb(error,success)
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
});

module.exports = {
    multer : multer,
    storage : storage
};
