import ToDoCreate from '../todoadd/TodoCreate';
import ToDoList from '../todolist/ToDoList';
import './Todo.css';
import { useState } from 'react';


const Todo = () => {
    const [ getTodos , setTodos] = useState ([
        {id:1, title : 'Eat'},
        {id:2, title : 'Sleep' },
        {id:3, title : 'Code' },
    ])
    const eventCreate = (todo) => {
        setTodos(getTodos.concat(todo))
    }
    return (
        <div>
            <h2>To Do List With React JS</h2>
            <ToDoCreate onCreateTodo={eventCreate}/>
            <ToDoList DataTodo={getTodos} />
            
        </div>  
    );
}

export default Todo 