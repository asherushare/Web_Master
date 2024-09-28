import React from 'react';
import { useState } from 'react';

function TodoList() {

    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        console.log("New task to do");
    }

  return (
    <>
      <input type="text" placeholder='task to do' value={newTodo}/>
      <button onLoad={addNewTask} style={{marginLeft: 10}}>Add Task</button>
      <hr />
      <h3>Todo List</h3>
      <ul>
        {
            todos.map((todo) => (
                <li>{todo}</li>
            ))
        }
      </ul>
    </>
  );
}

export default TodoList
