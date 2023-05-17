const express = require('express');
const app = express();

const cors = require('cors');

//Middleware - Allow frontend & backed to connect
app.use(cors())

let PORT  = 5000 

app.listen(PORT, () =>{
    console.log(`server is starting on port ${PORT}`);
} )