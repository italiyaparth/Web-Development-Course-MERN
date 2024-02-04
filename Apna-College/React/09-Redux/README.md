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


# Todo App

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
- Redux Toolkit lets you write simpler immutable update logic using "mutating" syntax


- Slice: Add a new file named src/features/todo/todoSlice.js. In that file, import the createSlice API from Redux Toolkit. ( for storing reducers )
- create features folder and according to component create Slice (e.g. for Navbar, for Footer, for Todo body, .etc)

-- src/features/todo/todoSlice.js

    - 