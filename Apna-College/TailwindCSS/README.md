# Introduction

- The framework's main focus is on providing utility classes
- pre-built classes, so do not need to write in our own css file
- e.g. m-4 means margin: 1rem 1rem 1rem 1rem;


# Installation

- The Play CDN is designed for development purposes only, and is not the best choice for production
    - adding before </head>; <script src="https://cdn.tailwindcss.com"></script>


- Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack, Rollup, Vite, and Parcel

-- In console

    - npm install -D tailwindcss postcss autoprefixer
    - npm install vite ( to auto update our code in browser from vscode )
    - npx tailwindcss init -p ( to create plugin files for postCSS )

    - In tailwind.config.js, write content: ["*"] ( means tailwind css will apply to which html files, * means all )
    - make a style.css file, link it to html file.
    - In style.css, add the following:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    - we have installed vite so we will add something at the top in package.json:
          "scripts": {
                "start": "vite"
            }
    - npm run start ( to start server )


# classes of tailwind

- tailwindcss.com/docs


# Apply Directive

- Use @apply to inline any existing utility classes into your own custom CSS.

- Suppose, we have three <div>, all of them have some(let's say 3 out of 5) same classes, then we can replace with one(our own custom name of the class - suppose "box")
- In style.css, write this: 
    .box {
        @apply color text-white border-2;
    }