var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mind Forecast' });
});

router.use('/main', require('./main'));
router.use('/mind', require('./mind'));
router.use('/result', require('./result'));

module.exports = router;