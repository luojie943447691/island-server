const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManeger = require('./core/init')
const app = new Koa()
// 注意先后顺序。有了接收 body 的中间件之后，才能在之后的路由中使用
app.use(parser())
// 初始化 
InitManeger.initCore(app)

app.listen(3000, () => {
    console.log("已开始监听3000端口！");
})