// /api/auth

const router = require('express').Router();

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

function validateUserInfo(req, res, next) {
  if (req.body && req.body.username && req.body.password) {
    
  }
}
module.exports = router;
