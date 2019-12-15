const express = require('express')
const mongoose = require('mongoose')
// const routes = require('./routes/routes')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
// const errorHandlers = require('./handlers/errorHandlers')
const passport = require('passport')
// require('./handlers/passport')

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
require('./config/passport')(passport)

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connnected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect ${err}`)
})


const users = require('./routes/api/users');
app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

module.exports = app