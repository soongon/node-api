const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/products', (req, res) => {
    const dataFromDB = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ];
    res.json(dataFromDB);
});
app.get('/products/:id', (req, res) => {
    if (req.params.id === '1') {
        res.json({
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        });
    } else if (req.params.id === '2') {
        res.json({
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        });
    } else if (req.params.id === '3') {
        res.json({
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        });
    } else {
        res.json('error...');
    }
});
app.post('/products', (req, res) => {
    const fromFrontend = req.body;

    res.json(fromFrontend);
});
app.put('/products', (req, res) => {
    const fromFrontend = req.body;

    res.json(fromFrontend);
});
app.delete('/products/:id', (req, res) => {
    res.json(req.params.id + '??? ??? ??????');
});
app.get('*', (req, res) => {
    res.send('????????? ???????????????.');
});
app.listen(3000, () => {
    console.log('server ready on port 3000...');
});