const express = require('express');
const app = express();

const cors = require('cors');
const pool = require('./db');

//Middleware - Allow frontend & backed to connect
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

//GET all todos

//GET one todo

//CREATE one todo
app.post('/todos', async (req, res) => {
    try {
        res.json(req.body);
    } catch (e) {
        console.error(e.message);
    }
})

//UPDATE a todo

//DELETE one todo

app.listen(PORT, (req, res) =>{
    console.log(`App is running on port ${PORT}.`);
} )