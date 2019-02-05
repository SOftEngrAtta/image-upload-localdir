const express = require('express');
const router = express();
const multer = require("multer");
const fs = require('fs');

const upload = multer({
    dest: "C:/Users/atta/Desktop/clients/node-server/images"    
});

module.exports = (connection)=>{

    router.post('/image' , upload.single("file" , (res,res)=>{

        const tempPath = req.file.path;
        console.log(tempPath);

    }))

    return router
}