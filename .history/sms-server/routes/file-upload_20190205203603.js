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
            
            var imageBase64 = fields['file'][0];

            var matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            var response = {};
            response.type = matches[1];
            response.data = new Buffer(matches[2], 'base64');
            var imageBuffer  = response
            // var buf = Buffer.from([files['file']], 'base64');

            // console.log('bufferData',buf);

            fs.writeFile('test.jpg', imageBuffer.data,  function(err){
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