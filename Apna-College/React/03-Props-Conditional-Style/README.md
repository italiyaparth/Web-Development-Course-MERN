- Set up Local Environment for React
- React Props
- Conditionals
- Style
- Amazon Cards


# Set up Local Environment for React

-- In Console

    - npm create vite@latest
    - give a project name = arrays-app
    - select framework = React
    - select varient = JavaScript

- Now, you can see that, there is a "arrays-app" folder is created. Inside, there are folders and files.
- We have to install node_modules

-- In Console

    - cd arrays-app
    - npm install
    - To start the server = npm run dev; it will give a link

- This is something we can call a boilerplate for starting a react app.


# React Props

- Props are the information that you pass to a JSX tag

-- In ProductProps.jsx

    - create ProductProps component with receiving (multiple) props as destructuring objects or single object and then use obj.key ( as props are being send as object(key-values pairs) )
    - we can add "default" value to the props if no props received from above, (with = assignment operator)
    - add props values in HTML
    - values will be directly printed without comma-separated values for "array" props
    - for "object" props, we can print all the values diretcly like arrays but value for individual key has to be mentioned
    - we can send "array of elements" as props, so that we can separate values   OR   using map method
    - export ProductProps

-- In ProductPropsTab.jsx

    - import ProductProps.jsx
    - render ProductProps with props
    - export ProductPropsTab

-- In App.jsx

    - import ProductPropsTab.jsx
    - render ProductPropsTab

-- In main.jsx

    - There is <React.StrictMode>. If you log props in console then they printed two times in console. If you want to print them single time then comment out <React.StrictMode>.


# Conditionals

- Adding elements on the basis of some condition (turnery statements)
- element will be created if conditions match, so that there will be no extra node or some other element can be there

    - { price >= 10000 ? <p>Discount of 5%</p> : null } same as { price >= 10000 && <p>Discount of 5%</p> }

-- In ProductConditionals.jsx

    - create ProductConditionals component with receiving props
    - as per conditionals add elements
    - export ProductConditionals

-- In ProductConditionalsTab.jsx

    - import ProductConditionals.jsx
    - render ProductConditionals with props
    - export ProductConditionalsTab

-- In App.jsx

    - import ProductConditionalsTab.jsx
    - render ProductConditionalsTab


# Style

- We will set styles in jsx file itself. So variable names(attribues) will be camelCase instead of hyphened names of css file. ( background-color in css BUT backgroundColor in JSX file )

-- In ProductStyle.jsx

    - create ProductStyle component with receiving props
    - add styles in style attribute of element
    - export ProductStyle

-- In ProductStyleTab.jsx

    - import ProductStyle.jsx
    - render ProductStyle with props
    - export ProductStyleTab

-- In App.jsx

    - import ProductStyleTab.jsx
    - render ProductStyleTab


# Amazon Cards

-- In AmazonCards.jsx

    - create AmazonCards component with receiving props
    - export AmazonCards

-- In AmazonCardsTab.jsx

    - import AmazonCards.jsx
    - render AmazonCards with props
    - export AmazonCardsTab

-- In App.jsx

    - import AmazonCardsTab.jsx
    - render AmazonCardsTab