const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


const User = require('../../models/User');
// @route   Post api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('username', 'Please include a valid username capital or small letters only minimum 8 characters').isLength({ min: 8 })
    .matches(/^[A-Za-z0-9 .,'!&]+$/)
    .not()
    .isEmpty(),
    check('password', 'Please enter a password with 6 or more characters, must include capital letters, small letters,numbers and special characters ').isLength({ min: 6 }).matches(/^[A-Za-z0-9 .,'!&]+$/)
  ],
   async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    try {
      // See if user exists
        
      let user = await User.findOne({ username });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        username,
        password
      });


      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('User registered');
      // Return jsonwebtoken

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});
  

// const User = require('../../models/User');
// // @route   post api/users
// // @desc    Register user
// // @access  Public

// router.post(
//   '/',
//   [
//     check('name', 'Name is required').notEmpty(),
//     check('email', 'Please include a valid email').isEmail(),
//     check(
//       'password',
//       'Please enter a password with 6 or more characters'
//     ).isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       let user = await User.findOne({ email });

//       if (user) {
//         return res
//           .status(400)
//           .json({ errors: [{ msg: 'User already exists' }] });
//       }

//       const avatar = gravatar.url(email, {
//         s: '200',
//         r: 'pg',
//         d: 'mm',
//       });

//       user = new User({
//         name,
//         email,
//         avatar,
//         password,
//       });

//       const salt = await bcrypt.genSalt(10);

//       user.password = await bcrypt.hash(password, salt);

//       await user.save();

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(
//         payload,
//         config.get('jwtSecret'),
//         { expiresIn: 360000 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   }
// );
module.exports = router;
