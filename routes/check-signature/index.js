const router = require('express').Router()
const checkSignature = require('./check-signature')

router.use('/', checkSignature)

module.exports = router