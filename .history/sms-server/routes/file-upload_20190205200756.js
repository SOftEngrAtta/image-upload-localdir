const express = require('express');
const router = express();
const fs = require('fs');
const multiparty = require('multiparty')


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        var form = new multiparty.Form();


        
        form.parse(req,(error,fields,files)=>{
            console.log('fields' , fields);
            console.log('files',files);
            
            var buf = Buffer.from(files, 'base64');
         
            console.log('bufferData',buf);

            fs.writeFile('image.jpg', buf , function(err){
                if (err) throw err
                console.log('File saved.')
            })

        })

        
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