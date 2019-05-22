const router = require('express').Router()
const fetchJssdkAuthConfig = require('./fetch-jssdk-auth-config')

router.use('/', fetchJssdkAuthConfig)

module.exports = router