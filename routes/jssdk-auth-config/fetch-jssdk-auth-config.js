const router = require("express").Router();
const {
  APP_ID: appId,
  APP_SECRET: appSecret
} = require("../../config/wx-public");
const weixinJsConfig = require("weixin-node-jssdk");
const url = require("url");

// 获取 js-sdk 权限验证配置
router.get("/", (req, res) => {
  const query = url.parse(req.url, true).query;
  weixinJsConfig({ appId, appSecret, url: query.url }, (error, { appId, nonceStr,timestamp, signature }) => {
    res.send(error ? {error: {}} : { 
      code: 0,
      data: {
        appId, nonceStr,timestamp, signature
      }
     })
  });
});

module.exports = router;
