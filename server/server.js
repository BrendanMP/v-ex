// Packages
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Imports
const index = require('./routes/index')
const users = require('./routes/users')
const keys = require('./keys')

// Init Express
const app = express()

// Mongoose Connect
mongoose.connect(keys.mongodb_url)

// Cors
app.use(cors())

// Logger
app.use(logger('dev'))

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/', index)
app.use('/users', users)

module.exports = app
