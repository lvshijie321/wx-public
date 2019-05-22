const router = require("express").Router()
const request = require('request')
require('weixin-node-jssdk')
// 获取 accessToken
router.get("/", (req, res) => {
    request.get(
        'http://jira.lanxinka.com/jira/rest/zephyr/latest/execution?issueId=28295&_=1558511888695',
        {
          
        },
        function(error, response, body) {
            debugger
          let end = new Date()
          if (!error && response.statusCode === 200) {
            body = JSON.parse(body)
            if (body.success) {
              resolve([moduleName, apiName, ' - ok -', end - start + 'ms'].join('-'))
            } else {
              resolve([moduleName, apiName, ' - error -', end - start + 'ms'].join('-'))
            }
          }
        }
      )
  res.send(isValid ? echostr : '')
});

module.exports = router
