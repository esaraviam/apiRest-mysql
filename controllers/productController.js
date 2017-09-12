'use strict'
const model = require('../models/productModel')

function listAll (req, res) {
  let prom = model.listAll()
  prom
    .then(rows => {
      res.status(200).json({ products: rows })
    })
    .catch(err => {
      res.status(500).json({ err: `ha ocurrido un error ${err}` })
    })
}

function getByID (req, res) {
  let prom = model.getById(req.params.productId)
  prom
    .then(rows => {
      res.status(200).json({ products: rows })
    })
    .catch(err => {
      res.status(500).json({ err: `ha ocurrido un error ${err}` })
    })
}

function addProduct (req, res) {
  let prom = model.addProduct({
    name: req.body.name,
    price: req.body.price,
    descripcion: req.body.descripcion
  })
  prom
    .then(rows => {
      res.status(201).json({ products: rows })
    })
    .catch(err => {
      res.status(500).json({ err: `ha ocurrido un error ${err}` })
    })
}

function updateProduct (req, res) {
  let product  = {
    id: req.params.productId,
    name: req.body.name,
    price: req.body.price,
    descripcion: req.body.descripcion
  }
  
  let prom = model.updateProduct(product)

  prom
    .then(item => {
      res.status(200).json({ products: item })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

function deleteProduct (req, res) {
  let prom = model.deleteProduct(req.params.productId)
  prom
    .then(row => {
      res.status(200).json({
        product: row
      })
    })
    .catch(err => {
      err => res.status(500).json({ err: `ha ocurrido un error ${err}` })
    })
}

module.exports = {
  listAll,
  getByID,
  addProduct,
  updateProduct,
  deleteProduct
}
