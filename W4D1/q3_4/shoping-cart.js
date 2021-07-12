const express = require('express');

const router = express.Router();

router.get('/shoppingcart', (req, res, next) => {

    const products = req.session.cart;
    console.log(req.session.cart);

    res.render('shoppingcart', { products });

});

router.post('/addToCart', (req, res, next) => {
    console.log(req.body);

    if (!req.session.cart[req.body.name]) {

        req.session.cart[req.body.name] = {
            name: req.body.name,
            quantity: 1,
            price: req.body.price
        };

    } else {
        req.session.cart[req.body.name].quantity += 1;
    }

    res.redirect('/shoppingcart');
});


module.exports = router;