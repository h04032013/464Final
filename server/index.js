const express = require('express');
const app = express();

const cors = require('cors');
const pool = require('./db');
const path = require('path')

//Middleware - Allow frontend & backed to connect
app.use(cors())
app.use(express.json())


//5000 chosen to not conflict with host 8000 from HW5 or host 7001 from classwork
const PORT = process.env.PORT || 5000

//we are getting a static html file
app.use(express.static(path.resolve(__dirname, '../client')));

//GET front end, no more "cannot get / error"
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../client/build/index.html'));
})

//GET all todos
app.get('/todos', async (req, res) => {
    try {
        const description = req.body;
        const allTodos = await pool.query("SELECT * FROM list;")
        res.json(allTodos.rows);
    } catch (e) {
        console.error(e.message);
    } 
})

//GET one todo
app.get("/todos:id", async (req, res) => {
    try {
        const {id}  = req.params;
        const todo = await pool.query("SELECT * FROM list WHERE todo_id = $1;",[id])
        res.json(todo.rows[0]);
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
app.put("/todos:id", async (req, res) => {
    try {
        const {id}  = req.params;
        const {description}  = req.body;
        const updatedTodo = await pool.query("UPDATE list SET description = $1 WHERE todo_id = $2 ;"
        ,[description,id]);
        res.json("todo list was updated");
    } catch (e) {
        console.error(e.message);
    } 
})

//DELETE one todo
app.delete("/todos:id", async (req, res) => {
    try {
        const {id}  = req.params;
        const deleteTodo = await pool.query("DELETE FROM list WHERE todo_id = $1 ;"
        ,[id]);
        res.json("todo list was deleted");
    } catch (e) {
        console.error(e.message);
    } 
})


app.listen(PORT, (req, res) =>{
    console.log(`App is running on port ${PORT}.`);
} )