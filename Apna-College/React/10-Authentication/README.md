# Authentication

- Setup with TailwindCSS ( client )
- Setup with Node ( server )
- Design Front End ( client )


# Setup with TailwindCSS ( client )

-- In Client Terminal

    - npm create vite@latest
    - project name = client
    - select = React
    - select = JavaScript

    - cd client
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

-- In tailwind.config.js

    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],

-- In src/index.css

    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;

-- In Client Terminal

    - npm install react-router-dom ( for single page application )
    - npm install axios
    - npm run dev



# Setup with Node ( server )

-- In Server Terminal

    - mkdir server
    - cd server

    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install bcrypt
    - npm install jsonwebtoken
    - npm install cors
    - npm install dotenv
    - npm install cookie-parser

-- In index.js

    - write code for our server

-- In .env

    - write secret variables

-- In .gitignore

    - write node_modules



# Design Front End ( client )

- Remove default "client/src/App.css", "client/src/assets", "client/public" & default code from "App.jsx"

-- In src/App.jsx

    - import { BrowserRouter, Routes, Route } from "react-router-dom";
    - render above components
    - import Signup component and render it in element attribute of Route component


-- In components/Signup.jsx

    - create and export Signup component
    - create signup form