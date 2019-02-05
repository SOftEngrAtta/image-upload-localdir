const express = require('express');
const router = express();
const fs = require('fs');


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        const file = req.body;

        fs.writeFile('image',file,(error, data)=>{
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