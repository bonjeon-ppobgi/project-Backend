const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     name: {
         type: String,
         maxlenth: 50
     },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }