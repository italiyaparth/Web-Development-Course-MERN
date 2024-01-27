- Set up Local Environment for React
- Create our First Component
- Import-Export
- Writing Markup in JSX (Rules)
- React Fragment
- JSX with Curly Braces

# Set up Local Environment for React

-- In Console

    - npm create vite@latest
    - give a project name = first-component
    - select framework = React
    - select varient = JavaScript

- Now, you can see that, there is a "first-component" folder is created. Inside, there are folders and files.
- We have to install node_modules

-- In Console

    - cd first-component
    - npm install
    - To start the server = npm run dev; it will give a link

- This is something we can call a boilerplate for starting a react app.


# Create our First Component

- Component is a reusable & independent piece of code.
- When creating a component, We can only return ONE element. If there
 are more than one elements then you can wrap it with div and it becomes ONE element

-- Creating a component (In App.jsx)

    - function Title() {
        return (
            <h1>I am the Title</h1>
        );
    }

-- Rendering a Component (In App.jsx)

    - <Title></Title>  or  <Title/>

- You can see that after return "()" is there, because we want to start html code from the next line which will be better to read.
- If you don't want to write "()" then you have to start writing html code right after single space after return keyword (NOT from the next line)


# Import-Export

- Every components are recommended to be created in separate files.
- In src/ = create "Description.jsx"

-- In Description.jsx

    - create Description component
    - export Description

-- In App.jsx

    - import Description from Description.jsx
    - use it in App component

- There are some two ways to export: default export & named export
- named exports are useful when you want to export multiple values and import them with their specific names, while default exports are handy for exporting a single value and giving it a custom name when importing.

- When importing, we can change name of the component then we also have to use that name in rendering in App component. e.g. import Des from "./Description.jsx"; In App component use <Des/>
- In named exports, we use {}.

- for imoprting css file, no export required; directly use: import "./Title.css"
- recommended to use className of returned div as "Title" inside Title.jsx


# Writing Markup in JSX (Rules)

-- Return a single root element

    - To return multiple elements from a component, wrap them with a single parent tag

-- close all tags

    - JSX requires tags to be explicitly closed; self-closing tags like <img> must become <img/> and wrapping tags like <li>oranges must be written as <li>oranges</li>

-- camelCase most of the things

    - for example "class" (attribute of HTML) is a reserved keyword in JavaScript, So in JSX "class" attribute replaced by "className".


# React Fragment

- Fragments let you group a list of children without adding extra nodes to the DOM.

- <> ....... </>
- To return multiple elemnets we have wrapped them with <div> element(a NODE); Without creating this extra node we will wrapped them with empty tag ( <> </> ).


# JSX with Curly Braces

- In JSX files, code written inside curly braces({}) will be treated as pure JavaScript