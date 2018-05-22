let createError = require('http-errors');
let express = require('express');
let path = require('path');
// var favicon = require('serve-favicon'); // uncomment after placing our favicon in /public
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// let bodyParser = require('body-parser');

let indexRouter = require('./routes/index');
let iRouter = require('./routes/i');
let tipsRouter = require('./routes/tips');
let loginRouter = require('./routes/login');
let recipeRouter = require('./routes/recipe');

let app = express();

const request = require('request');
const each = require('async-each');
// app.use(bodyParser.urlencoded());
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

module.exports = app;
