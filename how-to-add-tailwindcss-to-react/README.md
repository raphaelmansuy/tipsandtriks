# How to add taillwindcss to an existing react project

Go to directory of your react project and use yarn or **npm** to add **[taillwindcss](https://tailwindcss.com/)** **postcss-cli** **autoprefixer**

Using yarn

```bash
yarn add tailwindcss postcss-cli autoprefixer -D
```

Using npm

```bash
npm install tailwindcss postcss-cli autoprefixer -D
```

Then type this command in the terminal to create the default configuration

```bash
npx tailwind init tailwind.js --full
```

A **taillwind.js** file is created in the current directory

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override

Create a **postcss.config.js** file

```bash
touch postcss.config.js
```

```jsx
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
```

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

Create an **assets** directory in the **src** folder

```bash
mdkir ./src/assets
```

Create a file called **taillwind.css** in ./src/assets

```bash
touch ./src/assets/tailwind.css
```

Type in tailwind.css:

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

Modify the **package.json** file as follow:

```json
"scripts": {
    "start": "**npm run watch:css &&** react-scripts start",
    "build": "**npm run build:css &&** react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

A file called **main.css** will be generated each time we start the application

Then import the file **./src/assets/main.css** in the **App.js** file (or the root file of the application)

```jsx
import React from "react";
import ReactDOM from "react-dom";
import './assets/main.css';
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```
