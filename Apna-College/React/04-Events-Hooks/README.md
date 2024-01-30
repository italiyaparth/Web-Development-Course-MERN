- Set up Local Environment for React
- Click & Non-Click Events
- Event Object
- State & Hooks
- useState()
- LikeButton example
- Closure


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


# Click & Non-Click Events

- Handle Click & Non-Click Events in React. We use attribute of elements

-- In App.jsx

    - import Events.jsx
    - render Events component

-- In Events.jsx

    - export Events component while creating Events component
    - For click event, there is a "onClick" attribute to the elements and value will be name of the method (do not execute the method). write that method above the component which will do something om click of the element. give name of the methods like this: handleClick, .etc
    - For non-click events (check on MDN for more) (mouse hover, keypress down, double click, .etc), there are "onDoubleClick", "onMouseOver", .etc attributes to the elements and value will be name of the method (do not execute the method). write that method above the component which will do something om click of the element. give name of the methods like this: handleMouseOver, handleDoubleClick, .etc


# Event Object

- When we handle events, a default event object will be associated with that event handler(method definition), which has various properties. We will see "preventDefault()", here

-- In App.jsx

    - import EventObject.jsx
    - render EventObject component

-- In EventObject.jsx

    - export EventObject component while creating EventObject component
    - create form element with "onSubmit" attribute and create Handler for form submission
    - Now, if don't use "preventDefault()" then after clicking submit; only one time output will be shown on console window and will disappear immediately and form will be re-rendered (means input will be empty just like when we came to the webpage for the first time).

# State & Hooks

- The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

- Hooks were a new addtion in React 16.8. They lets you use state and other React features without writing a class. Hooks has 15 (Hooks) methods right now such as useState, useEffect, .etc; which allows us to use more features of components.

# useState()

- useState is a React Hook that lets you add a state variable to your component.

    - const [ state, setState ] = useState(initialState);

- initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

    - If you pass a function as initialState, it will be treated as an initializer function. it should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.
    - You can pass a function as initialState, But do not execute it because everytime it will execute this function. So give only reference. 
        e.g. "function init() { return 1;} useState(init);". 
        Do NOT use like this: "useState(init());"

- useState returns an array with exactly two values:

    1. The current state. During the first render, it will match the initialState you have passed.
    2. The set function that lets you update the state to a different value and trigger a re-render (only if any change occurs in variable).

-- In App.jsx

    - import Counter.jsx
    - render Counter component

-- In Counter.jsx

    - export Counter component while creating Counter component
    - Suppose, you create a onclick handler to increase count above return. We want to change the count which is in component element (means we want to re-render element, so that after execution of handler, element will also update its value). But it will not work.
    - import { useState } from "react"
    - intialize useState; use like this:
        let [ stateVariableName, setStateVariableName ] = useState(10);
        let [ stateVariableName, setStateVariableName ] = useState(1);
    - create a onclick handler to increase count and add setCount method in it, then use handler in button's "onClick" attribute
    - "setCount" is async method, that is why, even if you write "setCount" method multiple times, this method will work only one time
    - Now, we will use callback function to the "setCount" method, So this method will work as many time as you write

# LikeButton example

-- In App.jsx

    - import LikeButton.jsx
    - render LikeButton component

-- In LikeButton.jsx

    - import { useState } from "react"
    - export LikeButton component while creating LikeButton component
    - intialize useState
    - create a conditional so that like botton icon toggles
    - use font awesome website for icons

-- In index.html

    - add css link of font awesome cdn


# Closure

- A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables.
- In JS, once a function completes its execution, any variables that were defined inside the function scope cease to exist.

    function outer() {

        var b = 10;

        function inner() {

            var a = 20;
            console.log(a+b);   // 30
        }

        return inner;
    }