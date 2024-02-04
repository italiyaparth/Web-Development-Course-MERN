import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddTodoForm from "./AddTodoForm";

export default function Todos() {

    let todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleDeleteClick = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleMarkAsDoneClick = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <>
            <AddTodoForm />

            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{textDecorationLine: todo.isDone && "line-through"}}>{todo.task}</span>
                        &nbsp;
                        <button onClick={() => handleDeleteClick(todo.id)}>
                            Delete
                        </button>
                        &nbsp;
                        <button onClick={() => handleMarkAsDoneClick(todo.id)}>
                            Mark as Done
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}