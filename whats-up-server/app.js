var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let chatRouter = require('./routes/chats.route');
let messageRouter = require('./routes/messages.route');


var app = express();

require('dotenv').config()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//configs
let connectionUrl = process.env.mongodbUrl;
mongoose.connect(connectionUrl, {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch((error)=> {
  console.log("error", error)
})

const db = mongoose.connection;
db.once('open', ()=> {
  console.log('db connected')
})

//Routing
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chats', chatRouter); //chats
app.use('/messages', messageRouter); //messages

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
