const Router = require('koa-router')
const { ParameterException } = require('../../../core/http-exception1')
const { PositiveIntegerValidator } = require('../../volidators/validator')

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

    const v = new PositiveIntegerValidator().validate(ctx)
    // 自动转换成数字了，
    const id = v.get('path.id',parsed = false)

    // if (!query || Object.keys(query).length === 0) {
    //     const error = new ParameterException()
    //     throw error
    // }
    // throw new Error('123')
    console.log("123");
})

module.exports = router