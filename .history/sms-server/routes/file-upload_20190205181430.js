const express = require('express');
const router = express();
const multer = require("multer");
const fs = require('fs');

const upload = multer({
    dest: "C:/Users/atta/Desktop/clients/node-server/images"    
});

module.exports = (connection)=>{

    router.post('/image' , (req,res)=>{

        const image = req.body;
        console.log(image);

    })

    return router
}