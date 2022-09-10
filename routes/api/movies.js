const express = require('express');
const router = express.Router();

// @route   GET api/movies
// @desc    Test route
// @access  Public

router.get('/', (req, res) => res.send('Movie route'));

module.exports = router;