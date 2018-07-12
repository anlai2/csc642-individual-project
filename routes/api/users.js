const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const validateRegisterInput = require('../../validation/register');

// Load User model
const User = require('../../models/User');

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        zipcode: req.body.zipcode,
        education: req.body.education,
        income: req.body.income,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
      });

      // Encrypt passwords
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
