const express = require('express');
const router = express();

module.exports = (connection)=>{

    router.post('/image' , (req , res)=>{
        console.log('step 01');
        console.log(req);
    })

    return router
}