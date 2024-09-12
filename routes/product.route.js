const express = require('express');
const router = express.Router();
const {getPoducts, getAProduct, updateAProduct, deleteAProduct, createAProduct} = require('../controllers/product.controller');

//get all the products
router.get('/', getPoducts);

//get a product by id
router.get('/:id', getAProduct);

//create a new product
router.post('/', createAProduct);

//update a product by id
router.put('/:id', updateAProduct);

//delete a product by id
router.delete('/:id', deleteAProduct);

module.exports = router;