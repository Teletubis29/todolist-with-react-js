import './ToDoList.css';

const ToDoList = (props) => {
    console.log(props.DataTodo)
    return (  
        <div>
            <ul>{
                 props.DataTodo.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                } )
                }
            </ul>
        </div>
    );
}

export default ToDoList
