const app = require("express")()
const route = require('./config/route')

//设置允许跨域访问该服务.
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

require('./util/register-route')(route, app)

app.listen(require('./config/app').PORT)
