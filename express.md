# Express

## Directory Structure

Note:

1. files are the items not prefixed with "/".


```
/freshfridge
    app.js
    /bin
        www        // sets up some of the application error handling 
                   // and then loads app.js to do the rest of the work
    package.json   // defines the application dependencies and other information
    /node_modules
        [about 4,500 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
        login.js
    /views         // The templates are stored under this directory.
        error.pug
        index.pug
        layout.pug
```

