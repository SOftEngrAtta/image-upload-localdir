const express = require('express');
const router = express();
const fs = require('fs');
const multiparty = require('multiparty')


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        var form = new multiparty.Form();

        console.log(form);
        
        // fs.writeFile('image.jpg' , file , (error, data)=>{
        //     if(error){
        //         res.send('file not uploaded successfully');
        //     }else{
        //         res.send('file uploaded')
        //     }
        // })

    })

    return router
}