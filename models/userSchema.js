const mongoose = require('mongoose')
// const Card = mongoose.model('Card')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        // validate: [validator.isEmail, 'Invalid Email Address'],
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    avatar: {
        type: String,
        default: ''
    },
})

module.exports = mongoose.model('User', userSchema)