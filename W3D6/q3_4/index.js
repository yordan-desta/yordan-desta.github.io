const express = require('express');
const path = require('path');

const shoppingcart = require('./shoping-cart');

const app = express();
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res, next) => {
    let product = {
        id: 1,
        name: "product",
        description: "description of the p",
        price: 12.00
    };
    res.render('product', { product });
});

app.use(shoppingcart);


app.listen(3000);