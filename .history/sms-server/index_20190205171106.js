const express = require('express');

const app = express();

const port = process.env.port || '8080';

app.get('/' , (req, res )=>{
    res.send('hello world');
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port} `);
})