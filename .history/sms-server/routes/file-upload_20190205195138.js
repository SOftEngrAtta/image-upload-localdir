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
        
            var bitmap = fs.readFileSync(files);
            console.log('bitmap' , bitmap);
            var bufferData =  new Buffer(bitmap).toString('base64');
            console.log(bufferData)
            fs.writeFile(files['file'][0]['originalFilename'], bufferData , function(err){
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