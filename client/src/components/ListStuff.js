import React, { Fragment, useState, useEffect } from "react";
//rename file from list.. list is a keyword?

const ListStuff = ()=> {

    //state to store todo items info in react
    const [todos, setValues] = useState([]);

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
            <tr>

            </tr>
        </tbody>
        </table>


        </Fragment>
    )
}

export default ListStuff;