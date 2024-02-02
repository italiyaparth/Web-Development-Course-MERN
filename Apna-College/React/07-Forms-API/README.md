- Set up Local Environment for React
- Forms Single Input
- Forms Multiple Input
- Comments Form
- useEffect
- API


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


# Forms Single Input

- The standard way with Forms is to use Controlled Components. So we make React state to be the "single source of truth"
- In HTML, form elements such as <input>, <textarea>, <select> typically maintain their own state and update it based on user input . In react, mutable state is typically kept in the state property of components, and only updated with setState()
- We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".

-- In App.jsx

    - import FormSingleInput.jsx
    - render FormSingleInput component

-- In FormSingleInput.jsx

    - export FormSingleInput component while creating FormSingleInput component
    - add input element with value and onChange attribute which will controll the element
    - to connect label & input, use htmlFor and id attribute


# Forms Multiple Input

- For multiple input, we will make a common handler for onChange of all input
- We will make common object, in which all stateVariables of form will be stored

-- In App.jsx

    - import FormMultipleInput.jsx
    - render FormMultipleInput component

-- In FormMultipleInput.jsx

    - export FormMultipleInput component while creating FormMultipleInput component
    - create common handler for all input
    - In useState, create single object which will contain all name of the form input
    - give "name" attribute to the input, but it has to be same as stateVariable name which we have used in common object or viceversa.

    - In handleInputChange method, to access key of the object use object[key] ( key variable known as computed property name). spread creates a new object

    - on clicking submit button, component will re-render. To prevent that, create a handler to use event.preventDefault() and add it to "onSubmit" attribute of form element. also empty the inputs


# Comments Form

- An example of multiple input form

-- In App.jsx

    - import CommentsForm.jsx
    - render CommentsForm component

-- In CommentsForm.jsx

    - export CommentsForm component while creating CommentsForm component
    - same as above multiple input stored in state


# useEffect

- The Effect Hook lets you perform side effects in function components when components re-renders. e.g. a loading animation until data is fetched
- Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
- useEffect(setup, dependencies?)

- to use useEffect, import useEffect, create useEffect method.
- e.g. useEffect( function printSomething() { 
            console.log("side-effect") 
        });

- dependencies is nothing but stateVariables in array format
- Meaning side effect will execute as per stateVariables names in the array 
- dependencies are optionals, if you do not mention it then useEffect will be executed for all re-render
- if we pass empty array. then useEffect will execute only at first rendering not at any re-rendering

- e.g. useEffect( function printSomething() { 
            console.log("side-effect") 
        }, [stateVariableName1, stateVariableName2]);


# API

- we will print jokes after fetching data

-- In App.jsx

    - import Jokes.jsx
    - render Jokes component

-- In Jokes.jsx

    - export Jokes component while creating Jokes component
    - import useState, useEffect
    - we cannot pass async function at initialization
    - we also want to show joke at first rendering, for that we will use useEffect. react recommendation is that use arrow function and call it right there.