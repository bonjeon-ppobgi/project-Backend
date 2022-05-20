const mongoose = require('mongoose');
const keywords = require('../routes/mind');
const keywordList = keywords.keywordList;

const { Schema } = mongoose;

const dataSchema = new Schema({
     title: {
         type: String,
         required: true,
     },
     creator: {
         type: Array,
     },
     actor: {
         type: Array,
     },
     genre: {
         type: Array,
     },
     img: {
         type: String,
     },
     summary: {
         type: String,
     }
})

module.exports = mongoose.model('da', mindSchema, 'mind');