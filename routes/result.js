var express = require('express');
const app = require('../app');
const mind = require('../schemas/mind');
var router = express.Router();
const mindSchema = require('../schemas/mind') // 스키마
const config = require('../config/key');
const res = require('express/lib/response');

function translateKeys (key) {
    const keywords = {
        "설렘주의":'tingle', 
        "로맨틱":'romantic',
        "감명을 주는":"impressed",
        "감상적":"sentimental",
        "힐링":"healing",
        "잔잔한":"wildless",
        "유쾌 발랄":"youthful",
        "위트 있는":"witty",
        "시트콤":"sitcom",
        "진심 어린":"sincere",
        "청춘 영화":"ht_movie",
        "거부할 수 없는 이끌림":"irresistible",
        "시대물":"period_drama",
        "가족":"family",
        "감정을 파고드는":"emotional",
        "판타지 시리즈":"fantasy",
        "사극":"historical",
        "기분 좋아지는":"feelgood",
        "서부극":"western",
        "마법 속으로":"magical",
        "코미디":"comedy",
        "애니메이션 영화":"animation",
        "청춘극":"highteen",
        "관능적":"sensual",
        "허당 매력":"nonsense",
        "눈물샘 자극":"sad",
        "아드레날린 폭발":"exciting",
        "흥미진진":"interesting",
        "긴장감 넘치는":"tense",
        "어두운":"dark",
        "폭력적인":"violent",
        "발상의 전환":"change_thinking",
        "불길한":"ominous",
        "색다른":"different",
        "도발적인":"provoke",
        "진실을 찾아":"truth",
        "논쟁의 중심":"debating",
        "무서운":"scary",
        "음산한":"dreary",
        "로맨틱한 영화":"romance",
    }
    
    let keyList = Object.keys(keywords);
    let keywordList = Object.values(keywords);
    
    for (i=0; i<keyList.length; i++) {
        if (key === keyList[i]) {
            key = keywordList[i]
        }
    }
    return key;    
}

/* 데이터 넘겨주기 */
router.get('/', (req, res, next) => {
  const mongoClient = require('mongodb').MongoClient;
  mongoClient.connect(config.mongoURI, (err, db) => {
    if (err) throw err;
    console.log('result 라우터에서 DB에 연결해써');


    const database = db.db('keyword');
    const userID = req.body.userID;
    const mindID = Number(req.body.mindID);
    const mindTemp = Number(req.body.mindTemp);
    const word = String(req.body.word);

    collectionKey = translateKeys(word)
    database.collection(collectionKey).find({}, (err, result)=>{
        if (err) throw err;
        res.json(result);
    })
  });
});

module.exports = router;