const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    const cookies = req.cookies;

    res.render('index', { cookies });
});

app.post('/addCookie', (req, res) => {
    const key = req.body.key;
    const value = req.body.value;

    res.cookie(key, value);

    res.redirect('back');
})

app.listen(3000);