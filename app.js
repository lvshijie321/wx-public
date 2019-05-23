const app = require("express")()
const route = require('./config/route')

//设置允许跨域访问该服务.
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
    next();
  });

require('./util/register-route')(route, app)

app.listen(require('./config/app').PORT)
