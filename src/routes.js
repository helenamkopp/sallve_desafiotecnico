const express = require('express');
const CartController = require('./controllers/CartController')
const routes = express.Router();


routes.get('/products', CartController.index);
routes.post('/products', CartController.store);
routes.get('/products/:id', CartController.show);
routes.put('/products/:id', CartController.update);
routes.delete('/products/:id', CartController.destroy);

module.exports = routes;