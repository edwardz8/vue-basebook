const mongoose = require('mongoose')

require('dotenv').config({
    path: '.env'
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://edwardz_8:theartofamericanfootball@vue-scotch-store-auth-j0llt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    const collection = client.db("basebook").collection("users");
    // perform actions on the collection object
    client.close();
});


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
})
mongoose.Promise = global.Promise
mongoose.connection.on('error', err =>
    console.error(`Database connection error: ${err.message}`)
)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

// require('./models/Category')
require('./models/Card')
require('./models/Reply')
require('./models/User')

const app = require('./app')
const port = process.env.PORT
app.listen(port, () =>
    console.log(`vue-basebook-server is running on port ${port}!`)
)