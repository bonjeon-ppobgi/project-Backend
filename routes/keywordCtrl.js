var express = require('express');
const app = require('../app');
const mind = require('../schemas/mind');
var router = express.Router();
const mindSchema = require('../schemas/mind') // 스키마
const config = require('../config/key');
const res = require('express/lib/response');


/* 데이터 넘겨주기 */
router.get('/', function(req, res, next) {
  const mongoClient = require('mongodb').MongoClient;

  let keyword = {
    animation: 'default', 
    comedy: 'default',
    debating: 'default',
    dreary: 'default',
    healing: 'default',
    highteen: 'default',
    ht_movie: 'default',
    irresistible: 'default',
    period_drama: 'default',
    romance: 'default',
    scary: 'default',
    tingle: 'default',
    western: 'default',
  };


  mongoClient.connect(config.mongoURI, (err, db) => {
    if (err) throw err;
    console.log('여기는 mind 라우터');
    database = db.db('keyword');
    database.collection('animation').findOne({}, (err, result)=>{
      if (err) throw err;
      keyword.animation = result;
      res.send()
    })
  });

});