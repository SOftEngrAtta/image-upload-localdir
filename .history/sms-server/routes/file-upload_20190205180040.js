const express = require('express');
const router = express();
const fs = require('fs');


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        const file = req.body;
        
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});

        res.setEncoding('binary')
        fs.writeFile('image.jpn',file, 'binary' , (error, data)=>{
            if(error){
                res.send('file not uploaded successfully');
            }else{
                res.send('file uploaded')
            }
        })

        console.log(req.body);
        console.log('step 01');
        console.log(req);
    })

    return router
}