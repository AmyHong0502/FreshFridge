# File Structure

## Express

How to run localhost: 

1. Nevigate to `freshfridge/` folder

2. Open CLI (Command line interface. Known as `cmd.exe`)

3. Type `node app.js`

```
freshfridge/       # root folder
    bin/           
        www        # This file is the one where everything begins.
                   # You don't need to work on this file.
                   # In case you want to know: port number is 80, not 3000. 
                   # So if you want to run localhost, 
                   # it's not localhost:3000. You can just use localhost.
    controllers/   # Routes use controllers to specify 
                   # what resource you want to use and
                   # what action you want to do.
                   # req: request
                   # res: response
                   # next parameter if there is one. (e.g. next(err);)
    models/        # Used for database. 
    node_modules/  # 7,000+ files are in this folder. These are multiple Node modules.
                   # You can ignore this folder.
    public/        # Every static files are in this folder.
                   # e.g. JavaScript, CSS, SCSS, image files
    routes/        # Routes specify what this web-app does with the given URL.
                   # You need to tell app.js to use the route before writing any code,
                   # but for now you don't need to worry about it. It's already done.
    views/         # You can think of these files as multiple HTML files.
    app.js
    package.json
    package-lock.json
```

### pug

.pug files generates HTML code for us. We don't need to close every single tag and it's easier to find each tag's #ID.

Syntax: [Documentation](https://pugjs.org/language/attributes.html)

---

## Layout (shared with ALL files)

- Template JavaScript Files:
  - vendor/jquery/jquery.min.js
  - vendor/bootstrap/js/bootstrap.bundle.min.js
  - vendor/jquery-easing/jquery.easing.min.js
  - vendor/bootstrap/css/bootstrap.min.css

- Template CSS Files:
  - vendor/font-awesome/css/font-awesome.min.css
  
- Custom JavaScript Files:
  - js/grayscale.min.js

- Custom CSS Files:
  - css/grayscale.min.css

### / (aka freshfridge.tk/)

N/A

### /i

N/A

#### /i/fridge (aka my fridge)
- Custom JavaScript Files:
  - fridgeButton.js

- Custom CSS Files:
  - fridgeButton.css

#### /i/shopping-list

N/A

### /login

N/A

### /tips

N/A

### /recipe

N/A


## Testing

These files are the ones WE ARE NOT USING (these are just for testing):

### Ajax.html

- JavaScript Files:
  - Script/jquery-1.5.2.min.js
  - Script/jquery.tmpl.min.js

### test.html

N/A