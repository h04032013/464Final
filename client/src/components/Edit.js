import React, {Fragment, useState } from 'react';

const Edit = ({todo}) => {
    //state tobe edited
    const [description, setDescription] = useState(todo.description);

    const newValue = async e => {
        //doesnt refresh too fast
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch(
            `http://localhost:5000/todos/${todo.todo_id}`,{method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
        //so we don't have manually refresh for new desc
          window.location = "/";
        } catch (er) {
          console.error(er.message);
        }
      };


    return (
        <div>
        <button
        type="button"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        {/*dialog box */}
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                //update the table
                onClick={() => setDescription(todo.description)}
              >
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                data-dismiss="modal"
                onClick={e => newValue(e)}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => setDescription(todo.description)}
                >Close
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Edit;