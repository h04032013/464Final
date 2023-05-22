import React, {Fragment, useState} from "react";

const Input  = () => {
    const [description,setDescription] = useState("");

    const onSubmitForm = async e => {
        //wont refresh after pressing enter
        e.preventDefault();
        try{
            const body = {description};
            //fetch request, using body for backend
            //await = tell the program to wait before sending error msg
            const response = await fetch("https://localhost:5000/todos", {
                //add input to backend database as REST. post the info
                method: "POST",
                //data as JSON
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)});
                //wont have to manually refresh
                window.location = "/";
        } catch (er) {
            console.error(er);
        }
    }
    return (
        <div>
            <h1>Enter something to do today!</h1>
            <form onSubmit={onSubmitForm} >
                <input type="text" value = {description}
                //store input as a prop/state in the js
                onChange={e => setDescription(e.target.value)}></input>
                <button type="submit">Add</button>
            </form>
            </div>
    )
}

export default Input;