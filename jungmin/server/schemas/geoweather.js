const mongoose = require('mongoose');

const geoWeatherSchema = mongoose.Schema({
    latitude: { type: Number },
    longitude: { type: Number },
    weatherId: { type: String, maxlenth: 50, required: true },
    feelsLikeTemp: { type: Number }
})

const User = mongoose.model('geoWeather', userSchema)

module.exports = { User }