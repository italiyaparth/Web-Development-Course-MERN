- Set up Local Environment for React
- Lottery Game


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


# Lottery Game

- We are given Lottery Tickets with an 3 digit number
- the number is generated randomly
- If some of all digits is 15 (a winning condition), we win the lottery.

- we will make reusable components as many as possible so that if we need to change winning condition, number of digits for lottery, number of lottery tickets then we update them at one place only and do not need to change whole code.
- we have to determine where to put useState & from where to pass props
- App -> Lottery -> Ticket -> TicketNumber & TicketBuyButton
- our state will be ticket array.
- In Lottery, we have winning logic so here we need state and in Ticket we will send ticket array state as props from Lottery

- Sharing State Between Components :
    - Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it's one of the most common things you will do writing React code.

- Logical v/s Presentational Components
    - Presentational Components: to design UI, do not have state variable, may have props
    - Logical Components: have state variables, have some logic for state to change

-- In TicketNumber.jsx

    - export TicketNumber component while creating TicketNumber component
    - this component will receive a number from props and display it

-- In Ticket.jsx

    - export Ticket component while creating Ticket component
    - receive ticket array as props
    - render TicketNumber using map method and pass a number from ticket array

-- In Lottery.jsx

    - export Lottery component while creating Lottery component
    - receive total-digits-of-lottery(a number) and winning-condition(a function)
    - import and render Ticket with passing ticket array
    - import useState
    - create useState initialization
    - import TicketBuyButton
    - render TicketBuyButton with action attribute's value as function
    - import winning condition, as per this condition write a congratulation message

-- In TicketBuyButton.jsx

    - export TicketBuyButton component while creating TicketBuyButton component
    - receive function as prop

-- In helper.js

    - export random number generator method while creating this method
    - export winning condition method

-- In App.jsx

    - import Lottery.jsx
    - create winning condition
    - render Lottery component with passing total-digits-of-lottery(a number) and winning-condition(a function)