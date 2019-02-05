const express = require('express');
const router = express();
const fs = require('fs');


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        const file = new Buffer(req.body);
        
        fs.writeFile('check.txt' , file , (error, data)=>{
            if(error){
                res.send('file not uploaded successfully');
            }else{
                res.send('file uploaded')
            }
        })

    })

    return router
}