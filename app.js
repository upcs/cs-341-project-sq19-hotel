var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newAccountRouter = require('./routes/postSignup');
var newPostRouter = require('./routes/postPost');
var newClassRouter = require('./routes/postNewClass');
var loginRouter = require('./routes/postLogin');
var newClassGetRouter = require('./routes/classesGet');
var classPostGetRouter = require('./routes/classPostsGet');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/postSignup', newAccountRouter);
app.use('/', indexRouter);
app.use('/postPost', newPostRouter);
app.use('/postNewClass', newClassRouter);
app.use('/postLogin', loginRouter);
app.use('/classesGet', newClassGetRouter);
app.use('/classPostsGet', classPostGetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
