// /api/auth

const router = require('express').Router();
const Users = require('./auth-model.js')

router.post('/register', validateUserInfo, (req, res) => {
  // implement registration
  Users.addUser(req.body)
    .then(response => {
      res.status(201).json({message: `User number ${response} created`})
    })
    .catch(Err => {
      res.status(500).json({message: "Error creating user", error: err})
    })
});

router.post('/login', (req, res) => {
  // implement login
});

router.get('/users', (req, res) => {
    Users.getUsers()
      .then(users => {
        res.status(200).json({data: users})
      })
      .catch(Err => {
        res.status(500).json({message: "Error retrieving users", error: err})
      })
})

function validateUserInfo(req, res, next) {
  if (req.body && req.body.username && req.body.password) {
    next();
  } else {
    res.status(400).json({message: "Please include a username and password"})
  }
}
module.exports = router;
