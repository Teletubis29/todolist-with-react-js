import './TodoCreate.css';
import { useState } from 'react';


const ToDoCreate = (props) => {
    
    const HandleInput = (event) =>{
        setinput(event.target.value)
    }
    const [getinput, setinput] = useState('')
    
    const HandleSubmit = (event) =>{
        event.preventDefault()
        
        const newTodo = {
            id: Math.floor(Math.random()*100) + 1,
            title : getinput   
        }
        props.onCreateTodo(newTodo)
        setinput('')
    }
    
    return (
        <form className='input-form' onSubmit={HandleSubmit}>
            <input type="text" value={getinput} onInput={HandleInput}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default ToDoCreate
