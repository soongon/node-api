const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(morgan('tiny'));

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