# How to use live-server to expose a file directory as a development http server

Created Time: May 24, 2020 4:17 AM
Last edited Time: May 24, 2020 4:30 AM
Publisher: Raphael MANSUY
Tags: development, tools

# Live-server

[https://www.npmjs.com/package/live-server](https://www.npmjs.com/package/live-server)

This is a little development server with live reload capability. Use it for hacking your HTML/JavaScript/CSS files, but not for deploying the final site.

There are two reasons for using this:

**AJAX requests don't work with the `file://` protocol due to security restrictions, i.e. you need a server if your site fetches content through JavaScript.Having the page reload automatically after changes to files can accelerate development.**

## How To

Create a directory ./www 

```bash
mkdir ./wwww
```

Edit a simple html page such as index.html in the ./www directory

```html
<html>
  <header></header>
  <body>
    <h1>This is a simple test</h1>
  </body>
</html>
```

Run the command live-server to expose the directory

```bash
live-server ./www

```

Result

![How%20to%20use%20live%20server%20to%20expose%20a%20file%20directory%20%20958cd8a5870c464685f0a8ae15cf91e8/Untitled.png](How%20to%20use%20live%20server%20to%20expose%20a%20file%20directory%20%20958cd8a5870c464685f0a8ae15cf91e8/Untitled.png)

Open the browser at http://127.0.0.1:8080

```bash
open http://127.0.0.1:8080
```

Result

![How%20to%20use%20live%20server%20to%20expose%20a%20file%20directory%20%20958cd8a5870c464685f0a8ae15cf91e8/Untitled%201.png](How%20to%20use%20live%20server%20to%20expose%20a%20file%20directory%20%20958cd8a5870c464685f0a8ae15cf91e8/Untitled%201.png)