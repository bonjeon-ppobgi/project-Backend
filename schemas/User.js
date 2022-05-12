const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
     name: {
         type: String,
         required: true,
         maxlenth: 50,
         default: true,
     },
     createdAt: {
         type: Date,
         default: Date.now
     }
})

module.exports = mongoose.model('userData', userSchema);