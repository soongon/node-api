const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('hello world...');
});

app.get('/hello', function (req, res) {
    res.send('hello again..');
});

app.listen(3000);
console.log('server ready on port 3000');