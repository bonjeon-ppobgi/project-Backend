var express = require('express');
var router = express.Router();
const User = require('../schemas/User') // 스키마

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then((User) => {
    res.json(User);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
});

// 유저 생성

router.post('/', (req, res, next) => {
  const user = new User({
    name: req.body.title
  })
  user.save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
})
module.exports = router;
