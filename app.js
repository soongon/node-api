const express = require('express');
const app = express();

// middlewares
app.use((req, res, next) => {
    console.log('미들웨어 1 을 통과하고 있습니다.');
    next();
});

app.use((req, res, next) => {
    console.log('미들웨어 2 를 통과하고 있습니다.');
    next();
});



app.get('/', (req, res) => {
    res.json('홈입니다.');
});
app.get('/users', (req, res) => {
    res.redirect('/users/1');
});
app.get('/users/1', (req, res) => {
    res.send('1번 글 상세보기');
});
app.get('*', (req, res) => {
    res.send('잘못된 경로입니다.');
})
app.listen(3000, () => {
    console.log('server ready on port 3000...');
});