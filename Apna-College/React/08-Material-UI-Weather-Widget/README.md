- Set up Local Environment for React
- Material UI
- Weather Widget


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


# Material UI

- Library of React UI components
- It includes a comprehensive collection of prebuilt components that ready for use in production right out of the box
- Material UI uses the Roboto font by default. Add it, too
- icons

-- In console

    - npm install @mui/material @emotion/react @emotion/styled
    - npm install @fontsource/roboto (import like this => import "@fontsource/roboto/400.css")
    - npm install @mui/icons-material


-- In App.jsx

    - import MUIsample.jsx
    - render MUIsample component

-- In MUIsample.jsx

    - export MUIsample component while creating MUIsample component
    - to add button; import Button from "@mui/material/Button"; then render Button with attributes visit mui docs
    - to add icon in button; import DeleteIcon from "@mui/icons-material/Delete"; then render it as "startIcon" attribute of Button
    - to add icon as a button; import IconButton from "@mui/material/IconButton"; then render it and add icon component inside it


# Weather Widget

- It will be simple widget, we will have search box and the result will shown.

-- In App.jsx

    - import WeatherWidget.jsx
    - render WeatherWidget component

-- In WeatherWidget.jsx

    - export WeatherWidget component while creating WeatherWidget component
    - import SearchBox component and render it
    - import InfoBox component and render it
    - create state variable weather info and pass it to InfoBox component
    - create a new method which will set state to new data and pass it to SearchBox component which will send new data

-- In SearchBox.jsx

    - export SearchBox component while creating SearchBox component
    - import TextField from '@mui/material/TextField';
    - render it: <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    - import Button from '@mui/material/Button';
    - import SendIcon from '@mui/icons-material/Send';
    - render button with icon, add type of button as submit

    - after clicking, button should be disabled, use useState
    - import CircularProgress from '@mui/material/CircularProgress';    for loading
    - textfield value, onChange sttribute values, create with useState
    - create preventDefault at "onSubmit" of form

    - visit https://openweathermap.org/current   for our weather API
    - API call - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    - get data, create method to fetch api

    - receive method from WeatherWidget component as props. send new data to this method

-- In InfoBox.jsx

    - export InfoBox component while creating InfoBox component
    - show weather info data
    - import card (media) component from MUI
    - receive weather info as props