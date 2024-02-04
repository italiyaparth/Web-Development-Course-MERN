# Redux

- State Management Library for JS Apps
- Redux is built for larger, more complex applications
- Redux Toolkit is the official recommendation of writing Redux code


# Understanding Terms

- we will save all state variables across app in a single "store" object and to mutate the state variables inside store, we will use "reducers" functions

- Store: A centralized store holds the whole state tree of your application

- Reducers: Functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.

- Action: It is a plain JavaScript object that has a type field. (like events)

- Slice: Collection of Redux reducer logic and actions for a single feature in your app typically defined together in a single file


- Redux Toolkit: The Redux Toolkit package is intended to be the standard way to write Redux logic.


# Set-up

-- In console

    - npm create vite@latest
    - cd redux-app
    - npm install
    - npm run dev

    - npm install @reduxjs/toolkit
    - npm install react-redux


# Configuring Store

- visit for more: https://redux-toolkit.js.org/tutorials/quick-start

- Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it


# Todo App - State Management

- Designing the Store: todo -> id, task, isDone

-- In src/app/store.js

    - import { configureStore } from '@reduxjs/toolkit';
    - export const store = configureStore({
        reducer: {},
    });
    - after actions, we will add reducer here.


- Actions: Add a Todo, Mark as Done, Delete a Todo

    - Redux Toolkit will automatically creates actions as objects.
    - e.g. { type: "ADD_TODO", payload: "write code" }
    - payload is information which we can pass (e.g. object, id, .etc)


- Creating Reducer: Redux Toolkit automatically generates action creators (functions that create action objects). (state, action) => { // update state }
- Redux Toolkit lets you write simpler immutable update logic using "mutating" syntax. meaning we don't need to update through destructuring ({...preVal, newVal})


- Slice: Add a new file named src/features/todo/todoSlice.js. In that file, import the createSlice API from Redux Toolkit. ( for storing reducers )
- create features folder and according to component create Slice (e.g. for Navbar, for Footer, for Todo body, .etc)

-- src/features/todo/todoSlice.js

    - import { createSlice } from '@reduxjs/toolkit';
    - create initial state
    - create Slice
    - export action creators
    - export default todoSlice.reducer;


- we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

-- In src/app/store.js

    - import todoReducer from "../features/todo/todoSlice";
    - add reducer: todoReducer in store


# Todo App - Show Todos Component

- Provider Component: The <Provider> component makes the Redux store available to any nested components that need to access the Redux store

-- In src/components/Todo.jsx

    - create and export todo component
    - import { useSelector } from "react-redux";
    - write useSelector function to return todos array from store
    - show all todos (tasks)

-- In App.jsx

    - import Todo from "./components/Todo"; and render it
    - import { Provider } from "react-redux"; and wrap above <Todo/> with this <Provider>
    - import { store } from "./app/store"; pass this store as props in above <Provider>


- Now, to access store in any nested components, we will use "useSelector" Hook
- useSelector: The useSelector hook allow you to extract data or the state from the Redux store using a selector function. (returns data)


# Todo App - Add Todos Component

- useDispatch: The useDispatch hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable

-- In src/components/AddTodoForm.jsx

    - create and export AddTodoForm component
    - create form to add todo
    - import useState and use it for input element
    - onSubmit handler, we want to save our value to the "store", here we will create "action" and Triggering a State Change
    - import useDispatch, we will need which reducer function and what is the action
    - import "addTodo" reducer which is we need and pass our data

-- In src/components/Todo.jsx

    - import and render AddTodoForm component


# Todo App - Delete todo

-- In src/components/Todo.jsx

    - add delete button next to task
    - import useDispatch and deleteTodo reducer
    - send action payload when delete button clicked