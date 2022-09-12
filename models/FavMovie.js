const mongoose = require('mongoose');

const FavMovieSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    }, 
    title: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },

});

module.exports = FavMovie = mongoose.model('movie', FavMovieSchema);