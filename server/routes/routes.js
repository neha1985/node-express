const express = require('express')
  , router = express.Router();

router.use('/users', require('./userRoute'));
router.use('/category', require('./categoryRoute'));

router.get('/', function(req, res) {
  res.send('Home page')
})

router.get('/about', function(req, res) {
  res.send('Learn about us')
})

module.exports = router