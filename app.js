const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('홈입니다.');
});

app.get('/users', (req, res) => {
    res.send('모든 글 보기');
});

app.get('/users/1', (req, res) => {
    res.send('1번 글 상세보기');
});

app.listen(3000, () => {
    console.log('server ready on port 3000...');
});