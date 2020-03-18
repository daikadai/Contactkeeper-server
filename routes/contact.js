const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check')

const User = require('../models/User');
const Contact = require('../models/Contact');

//@route    GET api/contacts
//@desc     Gal all users contacts
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ data: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    Post api/contacts
//@desc     Add new contact
//@access   Private
router.post('/', (req, res) => {
  res.send('Add contact')
});

//@route    Post api/contacts/:id
//@desc     Update contact
//@access   Private 
router.put('/:id', (req, res) => {
  res.send('Update contact')
});

//@route    Post api/contacts/:id
//@desc     Update contact
//@access   Private 
router.delete('/:id', (req, res) => {
  res.send('Delete contact')
});

module.exports = router;