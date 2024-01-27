# React

- React is JS Library for creating UI created by facebook
- official website = react.dev

- React lets you build user interfaces out of individual pieces called components.
- Create your own React components like Thumbnail, LikeButton, Video, .etc; Then combine them into entire screens, pages, and apps

- official docs = react.dev/learn


# Components

- React components are Javascript functions that return markup:

-- sample

    - function MyButton() {
        return (
            <button>I'm a button</button>
        );
    }

    export default function MyApp() {
        return (
            <div>
                <h1>Welcome to my App</h1>
                <MyButton/>
            </div>
        );
    }


# JSX - JavaScript Extension Syntax

- It lets you write HTML directly inside JS
- JSX is not real JS, but internal Babel tool transpile(convert) JSX to JS. you can see above JSX sample code to JS code on babeljs.io website


# Set up Local Environment for React

- There are two tools to set up local environment (1) Create-React-App (2) Vite
- Vite is new(2020)(faster), also recommended to use in official docs.
- visit vitejs.dev/guide

-- In Console

    - npm create vite@latest
    - give a project name = basic-react-app
    - select framework = React
    - select varient = JavaScript

- Now, you can see that, there is a "basic-react-app" folder is created. Inside, there are folders and files.
- We have to install node_modules

-- In Console

    - cd basic-react-app
    - npm install
    - To start the server = npm run dev; it will give a link

- This is something we can call a boilerplate for starting a react app.


# Understanding our App

- node_modules/ = installed dependencies folders and files
- public/ = right now, only image is there
- src/assets/ = right now, only image is there
- src/ = our .jsx & .css files are there, which are the main files for our app
- src/App.jsx = this file is important file, every components will come here at the end. Every react app has this App.jsx file
- index.html = this is our webpage. Every app will render in this root div inside of body of index.html.
- src/main.jsx = In this file, import some of the main libraries of react and main code for rendering App.

- index.html, main.jsx, App.jsx are our main files. We will NOT change index.html, main.jsx files. Our react app code will be written in App.jsx file.
- So, App is the highest level of component.