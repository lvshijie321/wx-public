const router = require('express').Router()
const fetchAccessToken = require('./fetch-access-token')

router.use('/', fetchAccessToken)

module.exports = router