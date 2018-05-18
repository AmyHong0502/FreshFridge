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

### HTTP verbs

```
post()
put()
delete()
options()
trace()
copy()
lock()
mkcol()
move()
purge()
propfind()
proppatch()
unlock()
report()
mkactivity()
checkout()
merge()
m-search()
notify()
subscribe()
unsubscribe()
patch()
search()
connect()
```

## Notes

We use Mongoose ODM (Object Data Model) as our DB.

An ODM represents the website's data as JavaScript objects.

A “collection” of “documents”, in a MongoDB database, is analogous to a “table” of “rows” in a relational database.