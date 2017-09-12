'use strict'
const connection = require('../db')

function getById (id) {
  let prom = new Promise((resolve, reject) => {
    connection.query(
      `SELECT * from productos where id = ${id}`,
      (err, rows, fields) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
  return prom
}

function listAll () {
  let prom = new Promise((resolve, reject) => {
    connection.query('SELECT * from productos', (err, rows, fields) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
  return prom
}

function addProduct (product) {
  let prom = new Promise((resolve, reject) => {
    connection.query(
      `Insert into productos (name , price , descripcion) values ('${product.name}' , ${product.price} , '${product.descripcion}')`,
      (err, rows, fields) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
  return prom
}

function updateProduct (product) {
  let prom = new Promise((resolve, reject) => {
    connection.query(
      `UPDATE PRODUCTOS SET name = '${product.name}' , price =${product.price} , descripcion = '${product.descripcion}' where id = ${product.id}`,
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
  return prom
}

function deleteProduct (id) {
  let prom = new Promise((resolve, reject) => {
    connection.query(
      `delete from productos where id = ${id}`,
      (err, rows, fields) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
  return prom
}

module.exports = {
  listAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct
}
