- Set up Local Environment for React
- Objects-Arrays & State
- ToDo
- Unique Key for List Items
- Delete from an Array
- Upadte in Array
- Mark as Done in ToDo


# Set up Local Environment for React

-- In Console

    - npm create vite@latest
    - give a project name = react-app
    - select framework = React
    - select varient = JavaScript

- Now, you can see that, there is a "react-app" folder is created. Inside, there are folders and files.
- We have to install node_modules

-- In Console

    - cd react-app
    - npm install
    - To start the server = npm run dev; it will give a link

- This is something we can call a boilerplate for starting a react app.


# Objects-Arrays & State

- We will see example of basic Ludo Game, in which we will just have 4 buttons and will increase count clicks(moves) as per colors

-- In App.jsx

    - import LudoBoard.jsx
    - render LudoBoard component

-- In LudoBoard.jsx

    - export LudoBoard component while creating LudoBoard component
    - we store moves in an object instead of creating 4 individual color moves variables in useState
    - In Objects & Arrays, when we change values of a key, useState will not see it as change in object (as changes happens in same object but address of object does not change), so it will not re-render the component
    - Now, we will create a new updated object which will have new address. we will use spread, which will create new object.
    - We will use callback in set method, as new value depends on old value
    - Same things will happen with arrays


# ToDo

- We will use useState to create ToDo list

-- In App.jsx

    - import ToDoList.jsx
    - render ToDoList component

-- In ToDoList.jsx

    - export ToDoList component while creating ToDoList component
    - we need an array, which stores input value of the input if input is not empty. use map method to display task items of array in <li>
    - we need to store input into another stateVariable(from this variable, we will use input value to store in task array), use onChange method in <input> to store input into stateVariable. value of input will be in event.target.value
    - after storing value into array, input needed to be empty. use setInputTodo(") means value of input will be empty.
    - See, <input> for further clarification. value is constantly replacing with stateVariable as onChange attribute triggers everytime we enter a character.


# Unique Key for List Items

- We will use uuid npm package to set key to the list items

-- In ToDoList.jsx

    - npm i uuid (in console)
    - import { v4 as uuidv4 } from "uuid";
    - We will make array of objects, which will have id & task
    - set uuid as per requirements, when storing new task & when using map set key attribute


# Delete from an Array

- We write method name in "onClick" attribute. If we execute method in "onClick" attribute then it will be executed as soon as page renders. If we want to pass argument then it will not work.
- So, we will use arrow function and then pass some argument. e.g. onClick={() => handleAddTodo(todo.id)}

-- ToDoList.jsx

    - add button next to tasks
    - we will use arrow function and then pass some argument. e.g. onClick={() => handleDeleteTodo(todo.id)}
    - we will use filter method to create a new array which will not have deleted item


# Upadte in Array

- Suppose we want to uppercase all items of an array or only one of the item of an array

-- ToDoList.jsx

    - add button "UpperCaseAll" & add button "UpperCaseOne" next to task items
    - create methods for them using map method


# Mark as Done in ToDo

- We want to add button "Mark as Done" & strike through task item

-- ToDoList.jsx

    - add button "Mark as Done" next to task items
    - add "isDone" key to array items & give it default "false"
    - create method to change "isDone" to true
    - add strike-through style in task span as per conditionals