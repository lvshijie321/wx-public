const router = require("express").Router()
const checkUtil = require("../../util/check-util")
const url = require("url")

// 确定数据源是否来自微信后台
router.get("/", (req, res) => {
  const { signature, timestamp, nonce, echostr } = url.parse(req.url, true).query;
  const isValid = checkUtil({ signature, timestamp, nonce })
  res.send(isValid ? echostr : '')
});

module.exports = router
