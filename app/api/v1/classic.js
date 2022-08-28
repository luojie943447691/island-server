const Router = require('koa-router')

const router = new Router()

router.get("/v1/book", (ctx, next) => {
    ctx.body = { "123": "book" }
})

router.post("/v1/:id/classic/latest", (ctx, next) => {
    const { request } = ctx
    const path = request.path
    console.log("path",ctx.params); // 获取 url 里面的 :xxx 参数
    console.log("path",request.query); // 获取 url ? 后的参数
    console.log("path",request.body); // 获取 body 里面的参数
    console.log("path",request.header); // 获取 header
})

module.exports = router