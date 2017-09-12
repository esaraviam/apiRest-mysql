'use strict'

const express = require('express')
const product = require('../controllers/productController')
const api = express.Router()

api.get('/products', product.listAll)
api.get('/products/:productId', product.getByID)
api.post('/products', product.addProduct)
api.put('/products/:productId', product.updateProduct)
api.delete('/products/:productId', product.deleteProduct)


module.exports  = api