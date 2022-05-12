var express = require('express');
var router = express.Router();
const mindData = require('../schemas/mind') // 스키마

/* GET users listing. */
router.get('/', function(req, res, next) {
  mindData.find()
  .then((mindData) => {
    res.json(mindData);
    
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
});

// 유저 정보 불러오기

// 마음 날씨 저장

router.post('/', (req, res, next) => {
    const mind = new mindData({
        mindID: req.body.mindID,
        mindTemp: req.body.mindTemp,
        isMind: req.body.isMind
    })
    mind.save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
})
module.exports = router;