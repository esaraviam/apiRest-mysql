'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const app = express()
const api = require('./routes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api' , api)

app.listen(config.PORT, () => {
    console.log(`Escuchando en el puerto ${config.PORT}`)
})