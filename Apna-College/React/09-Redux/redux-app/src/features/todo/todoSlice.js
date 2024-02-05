// Reducres
import { createSlice, nanoid } from '@reduxjs/toolkit'; // nanoid = generates unique id

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }]
};

export const todoSlice = createSlice({
    name: "todo", // typically name of the feature
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos = state.todos.concat([newTodo]);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        }
    }
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions
export default todoSlice.reducer;