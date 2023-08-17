const routes = require('express').Router();
const { router } = require('json-server');
const paypal = require("paypal-rest-sdk");
const paypalConfig = require("../config/paypal");

paypal.configure(paypalConfig);

const products = require("../config/products");

routes.get('/', (req,res) => res.render('index', { products }));

router.post('/buy', (req,res) => {

    res.send({success: true });
});

router.get('/success', (req,res) => {

    res.send({success: true });
});

router.get('/cancel', (req,res) => {
    
    res.send({ cancel: true });
});
