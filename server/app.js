const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport')
require('dotenv').config();

const {
    notFound,
    errorHandler
} = require('./middlewares');

const auth = require('./auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(passport.initialize())
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
    res.json({
        message: ' ⚾️  Welcome to The Basebook API!  ⚾️ '
    })
})

app.use('/auth', auth)

app.use(notFound)
app.use(errorHandler)


module.exports = app;