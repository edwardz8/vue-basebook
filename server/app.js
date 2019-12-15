const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandlers = require('./handlers/errorHandlers')
const passport = require('passport')
require('./handlers/passport')

const app = express()

app.use(cors())

app.use(bodyParser({
    limit: '50mb'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(passport.initialize())

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connnected successfully ${db}`)
})

app.use('/', routes)

app.use(errorHandlers.notFound)

if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors)
}

app.use(errorHandlers.productionErrors)

module.exports = app