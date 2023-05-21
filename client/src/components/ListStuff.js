import React, { Fragment, useState, useEffect } from "react";
//rename file from list.. list is a keyword?

const ListStuff = ()=> {

    //state to store todo items info in react
    const [todos, setValues] = useState([]);

    async function deleteTodo(id){
        try {
          const res =  await fetch(`https://localhost:5000/todos/${id}`, {method: "DELETE"});
        //so react updates and reflects changes
          setTodos(todos.filter(todos => todo.todo_id !== id));
        } catch (e) {
            console.error(e.message);

    }}


    async function getList() {
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
        <table>
        <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Finished</th>
            </tr>
        </thead>
        <tbody>

           {todos.map(todo => {
            //Get prop from index.js api
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><button>Edit</button></td>
                <td><button onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
           })}
        </tbody>
        </table>


        </Fragment>
    )
}

export default ListStuff;