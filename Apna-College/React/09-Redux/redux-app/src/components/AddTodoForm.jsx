import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";



export default function Todo() {

    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(task));    // payload
        setTask("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(event) => setTask(event.target.value)}/>
                <button>Add Task</button>
            </form>
        </>
    );
}