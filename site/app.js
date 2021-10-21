// dependencies
const createError = require('http-errors');
const fsMethods = require("./utils/fsMethods");
const fs = require("fs");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require("method-override");
const session = require('express-session');
const cookieCheck= require('./middlewares/cookieChek');
const localsCheck = require('./middlewares/localsCheck');
const env = require('dotenv').config()

// import routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

// api routers
const apiUsers = require("./routes/api/users"); 
const apiCart = require("./routes/api/cart"); 

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : "my secret",
  resave: false,
  saveUninitialized: true
}))

app.use(cookieCheck);
app.use(localsCheck);

// config routes
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);

// api routes
app.use("/api/users",apiUsers)
app.use("/api/cart",apiCart)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  fs.readdir(path.join(__dirname,"./public/images/products"),(errorFs,files) =>{

    req.files ? req.files.forEach(file => {
      files.includes(file.filename) ? fsMethods.deleteFile(`../public/images/products/${file.filename}`) : null;
    }) : null;

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});

module.exports = app;
