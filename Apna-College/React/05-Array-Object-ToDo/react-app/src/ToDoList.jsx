import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {

    let [todos, setTodos] = useState([]);
    let [inputTodo, setInputTodo] = useState("");

    let handleAddTodo = () => {

        if (inputTodo) {
            
            setTodos((previousTodos) => {
                return [...previousTodos, { task: inputTodo, id: uuidv4(), isDone: false }];
            });
            setInputTodo("");
        }
    };

    let handleUpdateInputTodo = (event) => {
        setInputTodo(event.target.value);
    };

    let handleDeleteTodo = (id) => {

        setTodos((previousTodos) => {
            return previousTodos.filter((todo) => todo.id != id);
        });
    };

    let handleUpperCaseAll = () => {
            
        setTodos((previousTodos) => 
            previousTodos.map((todo) => {
                return {...todo, task: todo.task.toUpperCase()};
            })
        );

    };

    let handleUpperCaseOne = (id) => {
            
        setTodos((previousTodos) => 
            previousTodos.map((todo) => {

                if (todo.id == id) {
                    return {...todo, task: todo.task.toUpperCase()};
                } else {
                    return todo;
                }
            })
        );

    };

    let handleDoneTask = (id) => {
            
        setTodos((previousTodos) => 
            previousTodos.map((todo) => {

                if (todo.id == id) {
                    return {...todo, isDone: true};
                } else {
                    return todo;
                }
            })
        );

    };


    return (
        <>
            <input placeholder="write task here" value={inputTodo} onChange={handleUpdateInputTodo}/>
            &nbsp;
            <button onClick={handleAddTodo}>Add New Task</button>

            <br /><br />

            <h2>To Do List</h2>
            <hr />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{textDecorationLine: todo.isDone && "line-through"}}>{todo.task}</span>
                        {/* <span style={ todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span> */}
                        &nbsp;
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        &nbsp;
                        <button onClick={() => handleUpperCaseOne(todo.id)}>UpperCase One</button>
                        &nbsp;
                        <button onClick={() => handleDoneTask(todo.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>

            <button onClick={handleUpperCaseAll}>UpperCase All</button>
        </>
    );
}