const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser');


const port = process.env.port || '8080';

/*****************************
 * handle cross platform issue 
 *  **************************/

app.use(cors());

/***********************************************
 * body-parser is using for getting data in body 
 * *********************************************/ 
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());



/****************
 * routes portion
 * **************/ 

const fileUpload = require('./routes/file-upload');

app.use('/file',fileUpload);


app.get('/' , (req, res )=>{
    res.send('hello world');
})

/********************************
 * handling annonymous request hit 
 *********************************/
app.get("*", function(req, res) {
    res.send("sms app server status: RUNNING");
})



app.listen(port, ()=>{
    console.log(`server is running on port ${port} `);
})