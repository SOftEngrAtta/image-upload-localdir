const express = require('express');
const router = express();

module.exports = ()=>{

    router.post('/image' , (req , res)=>{
        console.log('step 01');
        console.log(req);
    })


}