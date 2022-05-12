var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mind Forecast' });
});

router.use('/users', require('./users'));

module.exports = router;