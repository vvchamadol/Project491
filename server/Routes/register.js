const express = require('express')
const router = express.Router()
const {register} = require('../Controllers/register')



router.post('/create', register)

module.exports = router