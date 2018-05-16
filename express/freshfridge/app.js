let createError = require('http-errors');
let express = require('express');
let path = require('path');
// var favicon = require('serve-favicon'); // uncomment after placing our favicon in /public
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');

let indexRouter = require('./routes/index');
let iRouter = require('./routes/i');
let tipsRouter = require('./routes/tips');
let loginRouter = require('./routes/login');
let recipeRouter = require('./routes/recipe');

let app = express();

const request = require('request');
const each = require('async-each');
app.use(bodyParser.urlencoded());
app.use('/static', express.static('stuff'));



//Set up mongoose connection
let mongoose = require('mongoose');
let mongoDB = 'mongodb://dev2910:freshfridgetk@ds113200.mlab.com:13200/comp2910ff';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing our favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/i', iRouter);
app.use('/tips', tipsRouter);
app.use('/login', loginRouter);
app.use('/recipe', recipeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// Recursively calls the API with a parsed URL that includes the recipe that was click in index.html
// Only exits when theres an error or a proper response.
let specificIngredient;

function sendRecipe(callback) {
    request(recipeURL, {
        json: true
    }, function (error, response, specifiedrecipe) {
        if (!error && response.statusCode === 200) {
            specificIngredients = specifiedrecipe;
            if (callback) {
                return callback(null, specificIngredients);
            }
        } else {
            if (callback) {
                return callback(error, null);
            }
        }
    })
}


// Recursively calls the API with the URL of the recipe constraints
// Only exits when theres an error or a proper response.
function sendConstraintsAPI(callback) {
    request(URL, {
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            result = body;

            if (callback) {
                return callback(null, result);
            }
        } else {
            if (callback) {
                return callback(error, null);
            }
        }
    });
}

// Transforms the elements in an array and appends them to the yummly API URL format.
// EX:   &allowedIngredient[]=
let URL = "http://api.yummly.com/v1/api/recipes?_app_id=e486debb&_app_key=b7696375acec2618961fcedc1562f8af"
function format_array(constraints) {
    let concatenatedIngredients = "";

    for (let i = 0; i < constraints.length; i++) {
        if (constraints[i] !== "") {
            let name = constraints[i];
            constraintArray[i] = "&allowedIngredient[]=" + name;
            concatenatedIngredients += constraintArray[i]
        }
    }
    URL += concatenatedIngredients;
    URL += "&maxResult=6&start=" + ((clickCount * 6) + 1);
    console.log(URL);
}


module.exports = app;
