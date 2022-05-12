const mongoose = require('mongoose');

const { Schema } = mongoose;

const mindSchema = new Schema({
     userID: {
         type: mongoose.SchemaTypes.ObjectId,
         maxlenth: 50,
         ref: "userdatas",
     },
     mindID: {
         type: Number,
         required: true,
     },
     mindTemp: {
         type: Number,
     },
     isMind: {
         type: Boolean,
     }
})

module.exports = mongoose.model('mind', mindSchema, 'mind');