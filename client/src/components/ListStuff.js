import React, { Fragment, useState, useEffect } from "react";
import Edit from "./Edit";
import Input from "./Input";
//rename file from list.. list is a keyword?

const ListStuff = ()=> {

    //state to store todo items info in react
    const [todos, setValues] = useState([]);

    // aync to avoid promise chains/expressions?
    //changed some syntax
    const  deleteTodo = async (id) =>{
        try {
          const deleteTodo =  await fetch(`https://localhost:5000/todos/${id}`, {method: "DELETE"});
        //so react updates and reflects changes
          setValues(todos.filter(todo => todo.todo_id !== id));
        } catch (e) {
            console.error(e.message);

    }}

    //also changed syntax
    const getList= async () => {
        const res = await fetch("https://localhost:5000/todos");
        //wait for it to parse!!
        const todoList = await res.json();

        //testing out the response 
        console.log(todoList);
        setValues(todoList)
    }
    useEffect( () =>{
        getList();
    }, []);

    console.log(todos);
    return (
     <Fragment>
        <table align="center">
        <thead>
            <tr>
              <th padding="90px">Description</th>
              <th padding="90px">Edit</th>
              <th padding="90px">Finished</th>
            </tr>
        </thead>
        <tbody>

           {todos.map(todo => {
            //Get prop from index.js api
            <tr key={todos.todo_id}>
                <td>{todo.description}</td>
                <td><button>{Edit}</button></td>
                <td><button onClick={()=>deleteTodo(todos.todo_id)}>Delete</button></td>
            </tr>
           })}
        </tbody>
        </table>


        </Fragment>
    )
}

export default ListStuff;