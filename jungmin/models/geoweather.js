const mongoose = require('mongoose');

const geoWeatherSchema = mongoose.Schema({
    geoweather_id: { type: String, maxlenth: 50 },
    feels_like_temp: { type: Number, },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }