const express = require('express');
const router = express();
const fs = require('fs');


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        const file = Buffer.concat(req.body);
        
        fs.writeFile('image.jpg' , file , (error, data)=>{
            if(error){
                res.send('file not uploaded successfully');
            }else{
                res.send('file uploaded')
            }
        })

    })

    return router
}