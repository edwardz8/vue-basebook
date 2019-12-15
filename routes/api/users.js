const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const key = require('../../config/keys').secret;
const User = require('../../models/userSchema')

/* 
@route POST api/users/register
@desc Register the User
@access Public
*/

router.post('/register', (req, res) => {
    let {
        name,
        email,
        password,
        confirm_password
    } = req.body
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password does not match."
        });
    }
    // Check for unique name
    User.findOne({
        name: name
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    })
    // Check for the unique Email
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registered."
            });
        }
    });
    // Data is valid so register user
    let newUser = new User({
        name,
        email,
        password,
        avatar
    });
    // Hash Password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: 'User is now registered'
                })
            })
        })
    })
});

/* 
@route POST api/users/login
@desc Signing in the User
@access Public
*/

router.post('/login', (req, res) => {
    User.findOne({
        name: req.body.name
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            })
        }
        // If theres a user, compare password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // Users password is correct - Send json token
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: "You have successfully logged in!"
                    })
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect Password",
                    success: false
                })
            }
        })
    });
})

/* 
@route POST api/users/profile
@desc Return the users data profile
@access Private
*/

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
})

module.exports = router