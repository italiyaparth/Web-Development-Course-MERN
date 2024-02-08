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
    - npm install nodemailer

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
    - import Signin component and render it in element attribute of Route component


-- In components/Signup.jsx

    - create and export Signup component
    - create signup form
    - in the form create a <Link> element with "to" attribute which will work like anchor element and we move to the written path which is in "to" attribute
    - import { Link } from "react-router-dom";
    - create useState to store data in variable
    - import useState
    - create axios post method when submitting 
    - import axios
    - in axios post url will be of server
    - import "useNavigate" and use it to navigate to other routes


-- In components/Signin.jsx

    - same as above
    - we are using cookies in signin so add this line: axios.defaults.withCredentials = true;



# Back End ( server )

-- In index.js

    - create mongoose connection
    - use CORS
    - import User model
    - create post route for saving user in database (signup)
    - import bcrypt and use it before storing data
    - send data to the front-end

    - create post route for authenticate user in database (signin)
    - compare method is of bcrypt, to validate hashed password
    
    - import jwt
    - create token, in payload username & SECRET(at least 32 chars), and options(expiresIn) has to be passed
    - store this token in user cookies: res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    - import cookie-parser and use
    - add cors options


-- In models/users.js

    - create model for users



# Front End ( client )

-- In src/App.jsx

    - import Home component and render it in element attribute of Route component
    - import ForgotPassword component and render it in element attribute of Route component


-- In components/Home.jsx

    - create and export Home component
    - create <Link> to Sign Out


-- In components/ForgotPassword.jsx

    - create and export ForgotPassword component
    - send email to reset password
    - after sending email navigate to Sign In



# Back End ( server )

-- In index.js

    - create forgotpassword route
    - import nodemailer and write code for it (sample from w3school)
    - we have to give our own email and password, you should go to your account > 2-step verification and then at the last generate App password use that password
    - to to replace "." with URL encoding use, const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");



# Back End ( server )

-- In src/App.jsx

    - import ResetPassword component and render it in element attribute of Route component and concat "/:token" in path


-- In components/ResetPassword.jsx

    - create and export ResetPassword component
    - after reset navigate to Sign In
    - useParams is from react-router-dom for accessing params. here, we will access token and concat it with post route



# Back End ( server )

-- In index.js

    - create resetpassword route
    - decode jwt token
    - get id from jwt token
    - update hash password



# Back End ( server )

-- In index.js

    - create verifyUser middleware to check at all user needed routes
    - create authentication route at "/"



# Front End ( Client )

-- In components/Home.jsx

    - create useEffect and send get request to "/" route
    - it will check if user is signed in or not

    - create handleClickSignOut method



# Back End ( server )

-- In index.js

    - create signout route


------- verify and sign out route are on the same page in react, authorization not working properly -------
------- check it --------