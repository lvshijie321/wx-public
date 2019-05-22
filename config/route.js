module.exports = {
  // 确定数据源是否来自微信后台
  "/check-signature": require("../routes/check-signature"),
  // 获取 accessToken
  "/fetch-access-token": require("../routes/access-token"),
  // 获取 js-sdk 权限验证配置
  "/fetch-jssdk-auth-config": require("../routes/jssdk-auth-config") // method: get, params: { url }
};
