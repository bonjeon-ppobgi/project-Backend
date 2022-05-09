const mongoose = require('mongoose');
const config = require('./config/key');

module.exports = () => {
    const connect = () => {

        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(config.mongoURI, {
            dbName: 'users',
        }, (error) => {
            if (error) {
                console.log('error: mongoDB 연결 에러입니다.', error);
            } else {
                console.log('mongoDB 연결에 성공했습니다.');
            }
        });
    };
    connect();
    mongoose.connection.on('disconnected', () => {
        console.error('mongoDB 연결이 끊겼습니다. 연결을 재시도합니다...');
        connect();
    });
    
    /* 스키마 연결부 */
    require('./Users');
    require('./geoweather');
    require('./mindweather');

};