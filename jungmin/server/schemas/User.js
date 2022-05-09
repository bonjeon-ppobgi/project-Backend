const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     username: {
         type: String,
         required: true,
         maxlenth: 50
     },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }