const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config/key');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


/*                         추가부분                        */
///////////////////////////////////////////////////////////

app.use(express.urlencoded({extended: true})) 

app.get('/', (req, res)=>{ 
  res.sendFile(__dirname +'/index.html') 
 });  

 app.get('/input', (req, res)=>{ 
  res.sendFile(__dirname +'/input.html')
});

app.post('/add', (req, res) => {  //post형식 전송 코드 작성
  console.log(req.body);
  console.log(req.body.title);  //input.js의 name="title"
  console.log(req.body.content);   //input.js의 name="content"
  res.send('전송완료');
});
//////////////////////////////////////////////////////////////////



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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