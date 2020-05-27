# How to add tailwindcss to a simple HTML Project

Created Time: May 27, 2020 8:30 AM
Last edited Time: May 27, 2020 11:09 AM
Publisher: Raphael MANSUY
Tags: taillwindcss

Initialize a project

```bash
yarn init
```

Install taillwindcss, postcss-cli and autprefixer

```bash
yarn add tailwindcss postcss-cli autoprefixer -D
```

-D option if for save package to your `peerDependencies`

Create a default configuration file for tailwindcss

```bash
npx tailwind init tailwind.js -full
```

Create a **postcss.config.js** file

```bash
touch postcss.config.js
```

Edit postcss.config.js and type

```bash
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
```

Create file tailwind.css as follow

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

Use **postcss** to generate the stylesheet style.css

```css
npx postcss tailwind.css -o style.css
```

Use the style.css in your HTML project

```html
<html>
 <head>
	<link rel="stylesheet" href="style.css"/>
	</head>
 <body>
	 <h1>Hello world</h1>
</body>
</html>

```

Test it with liveserver

```bash
yarn add live-server -D
```

```bash
live-server 
```