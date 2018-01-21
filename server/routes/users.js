const express = require('express')
// const assert = require('assert')
const router = express.Router()
// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const keys = require('../keys')

router.get('/', function(req, res, next) {
  res.send({
    message: 'response from users'
  })
})

module.exports = router
