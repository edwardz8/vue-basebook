const mongoose = require('mongoose')
const validator = require('validator')
const rootPermissions = require('../lib/rootPermissions')
const categoryPermissions = require('../lib/categoryPermissions')
const Card = mongoose.model('Card')

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
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: [true, 'Email is required'],
        default: 'user'
    },
    rootPermissions: {
        type: [String],
        enum: rootPermissions.all
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

userSchema.virtual('avatarUrl')
    .get(function () {
        return this.avatar !== '' ?
            `${process.env.SERVER_URL}/images/users/${this.avatar}` :
            ''
    })

userSchema.methods.getPermissions = async function () {
    let userCategoryPermissions = []
    if (['moderator', 'admin'].indexOf(this.role) !== -1) {
        const categoriesModeratedByThisUser = this.role === 'admin' ?
            await Category.find() :
            await Category.find({
                moderators: this._id
            })
        if (categoriesModeratedByThisUser) {
            userCategoryPermissions = categoriesModeratedByThisUser
                .map(category => category.slug)
                .reduce((acc, value) => {
                    acc[value] = categoryPermissions[this.role]
                    return acc
                }, {})
        }
    }
    return {
        root: !this.rootPermissions ?
            rootPermissions[this.role] :
            this.rootPermissions,
        categories: userCategoryPermissions
    }
}

userSchema.pre('save', async function (next) {
    // when rootPermissions is null,
    // we use default permissions based on role
    this.rootPermissions = null
    next()
})

userSchema.methods.toJSON = function () {
    const obj = this.toObject()
    delete obj.password
    delete obj.avatar
    delete obj.rootPermissions
    return obj
}

module.exports = mongoose.model('User', userSchema)