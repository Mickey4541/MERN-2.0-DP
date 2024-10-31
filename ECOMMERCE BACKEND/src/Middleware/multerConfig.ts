import { Request } from "express";

import multer from 'multer'

const storage = multer.diskStorage({
    destination : function (req:Request, file:Express.Multer.File, cb:any){ ///cb means callback
        //logic to validate the filetype(mimetype) to be safe from any attacks: yo validate na gardaa hacker ley any type of executable file pani haldina sakxa.
        // if server ko capacity 1gb xa ra koi badmoss hacker ley 1gb ko film haldiyo vani😂 server down.

        const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']
        if(!allowedFileTypes.includes(file.mimetype)){
            cb(new Error("Invalid file type. Only Supports png, jpeg and jpg."))//cb(error)
            return;
        }
        //if filesize pani validate garnu pare, if file.size>2346........yesari gardaa hunxa
        //console.log(file.mimetype);
        
        cb(null, "./src/uploads");//cb(error,success)
    },
    filename: function (req:Request, file:Express.Multer.File, cb:any){
        cb(null, Date.now() + "-" + file.originalname);
    }
});

export = {
    multer : multer,
    storage : storage
};