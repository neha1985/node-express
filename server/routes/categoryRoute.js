var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send([{categoryName: 'category1'},{categoryName: 'category2'}])
});

module.exports = router;