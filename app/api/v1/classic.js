const Router = require('koa-router')

const router = new Router()

router.get("/v1/book", (ctx, next) => {
    ctx.body = { "123": "book" }
})

router.post("/v1/:id/classic/latest", (ctx, next) => {
    const { request } = ctx
    const params = ctx.path // 获取 url 里面的 :xxx 参数
    const query = request.query  // 获取 url ? 后的参数
    const body = request.body // 获取 body 里面的参数
    const header = request.header // 获取 header

    if (!query || Object.keys(query).length === 0) {
        const error = new Error("出错啦")
        error.errorCode = 10001
        error.message = "没有填写参数"
        error.status = 400
        error.requestUrl = `${ctx.method} ${ctx.path}`

        throw error
    }
})

module.exports = router