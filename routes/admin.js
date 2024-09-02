const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
// we are not calling this function instead we are giving it's refrence , whenever req reaches this route go ahead and execute it .
router.get('/add-product', productsController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
