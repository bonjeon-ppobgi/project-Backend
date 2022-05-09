const express = require('express')
const app = express()
const port = 8081
const { User } = require('./models/User');
const bodyParser = require('body-parser');


const config = require('./config/key');

const mongoose = require('mongoose');
const exp = require('constants');

mongoose.connect(config.mongoURI, {})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => { res.send('서버에 연결되었습니다.') })

// bodyParser
// application/x-www-form-urlencoded <= 이렇게 생긴 데이터를 분석해서 가져올 수 있게 하는 기능 두개
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());


app.post('/register', (req,res) => { // http://localhost:3000/register <- /register가 엔드포인트 
  // 회원가입 시 필요한 정보들을 client에서 가져오면
  // 그것들을 db에 넣어준다.


  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err }) // 실패시 json 형식으로 클라이언트에 전달한다
    return res.status(200).json({ 
      success: true 
    }) // 성공시 status 200을 반환하고, json형식으로 success를 전달
  })


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})