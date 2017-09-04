const main = require('express').Router();
const { home, getProducts, getBasket, postBasket } = require('./handlers');
const cache = require('../../middleware/memory-cache');

main.get('/', home);
main.get('/products/:amount', getProducts);
main.get('/fetchBasket', getBasket);
main.post('/setBasket', postBasket);

module.exports = main;