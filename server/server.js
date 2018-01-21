// Packages
const express = require('express')
const cors = require('cors')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Imports
const index = require('./routes/index')
const users = require('./routes/users')

// Init
const app = express()

// Cors
app.use(cors())

// Logger
app.use(logger('dev'))

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use('/', index)
app.use('/users', users)

module.exports = app
