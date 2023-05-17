const express = require('express');
const app = express();

const cors = require('cors');
const pool = require('./db');
const path = require('path')

//Middleware - Allow frontend & backed to connect
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

//we are getting a static html file
app.use(express.static(path.resolve(__dirname, '../client')));

//return react frontend app
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../client/index.html'))
})

//GET all todos

//GET one todo
app.get('/todos', async (req, res) => {
    try {
        const description = req.body;
        const allTodos = await pool.query("SELECT * FROM list; ")
        res.json(allTodos.rows);
    } catch (e) {
        console.error(e.message);
    } 
})

//CREATE one todo
app.post('/todos', async (req, res) => {
    try {
        const description = req.body;
        const newTodo = await pool.query("INSERT INTO list (description) VALUES ($1) RETURNING * ;"
        , [description])
        res.json(newTodo.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
})

//UPDATE a todo

//DELETE one todo

app.listen(PORT, (req, res) =>{
    console.log(`App is running on port ${PORT}.`);
} )