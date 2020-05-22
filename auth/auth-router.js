// /api/auth

const router = require('express').Router();
const Users = require('./auth-model.js')

router.post('/register', (req, res) => {
  // implement registration
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
    
  }
}
module.exports = router;
