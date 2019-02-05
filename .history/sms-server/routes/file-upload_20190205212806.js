const express = require('express');
const router = express();
const fs = require('fs');
const multiparty = require('multiparty')


module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{

        var form = new multiparty.Form();

        // form.parse(req , (error, fields, files)=>{

        //     console.log('filds', fields);
        //     console.log('files' ,files);
        //     fs.readFile(files['file'][0]['path'], 'utf8', function (err, data) {
        //         if (err) throw err;

        //         console.log(data);

        //         var buf = new Buffer(data);
        //         fs.writeFile (files['file'][0]['originalFilename'], buf, function(err) {
        //             if (err) throw err;
        //             console.log('complete');
        //         });
        //     });
        // })
        
        form.parse(req,(error,fields,files)=>{
            console.log('fields' , fields);
            console.log('files',files);
            
            var imageBase64 = fields['file'][0];

            var matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            var response = {};
            response.type = matches[1];
            response.data = new Buffer(matches[2], 'base64');
            var imageBuffer  = response
            

            fs.writeFile(files['file'][0]['originalFilename'], imageBuffer.data,  function(err){
                if (err) throw err
                console.log('File saved.')
            })

        })

        
        

    })

    return router
}