import React, {Fragment, useState} from 'react';


const Input  = () => {
    const [description,setDescription] = useState("");

    const onSubmitForm = async e => {
        //wont refresh after pressing enter
        e.preventDefault();
        try{
            const body = {description};
            //fetch request, using body for backend
            const response = await fetch("https://localhost:5000/todos", {
                //add input to backend database as REST
                method: "POST",
                //data as JSON
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)});
        } catch (er) {
            console.error(er);
        }
    }
    return (
        <Fragment>
            <h1>Enter something to do today!</h1>
            <form onSubmit={onSubmitForm} >
                <input type="text" value = {description}
                onChange={e => setDescription(e.target.value)}></input>
                <button type="submit">Add</button>
            </form>
            </Fragment>
    )
}

export default Input;