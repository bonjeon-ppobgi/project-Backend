const mongoose = require('mongoose');

const { Schema } = mongoose;

const mindSchema = new Schema({
     userID: {
         type: String,
         maxlenth: 50,
         required: true,
     },
     mindID: {
         type: Number
     },
     mindTemp: {
         type: Number,
     },
     createdAt: {
         type: Date,
         default: Date.now
     }
})

module.exports = mongoose.model('mind', mindSchema, 'mind');