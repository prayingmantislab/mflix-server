const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const FavMovie = require('../../models/FavMovie');
const User = require('../../models/User');
//@route GET api/movies/me
//@desc Get current users movies
//@access Private

router.get('/me', auth, async (req, res) => {
  try {
    const movies = await Movie.findOne({ user: req.user.id })
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})


// @route   POST api/movies
// // @desc    Add fav movie
// // @access  Private

router.post('/', auth, async (req, res) => {
  const { title, poster, year, imdbID } = req.body;

  try {
    const newMovie = new Movie({
      title,
      poster,
      year,
      imdbID,
      user: req.user.id
    });

    const movie = await newMovie.save();

    res.json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




// @route   GET api/movies
// @desc    Get all movies
// @access  Public

router.get('/', 

async (req, res) => {
  try {
    const movies = await FavMovie.find();
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;