const Router = require('koa-router')
const {resolve} = require('path')
const { ParameterException } = require('../../../core/http-exception1')
const { PositiveIntegerValidator } = require('../../volidators/validator')

const router = new Router()

router.get("/v1/book", (ctx, next) => {
    ctx.body = { "123": "book" }
})

router.post("/v1/:id/classic/latest", async (ctx, next) => {
    const { request } = ctx
    const params = ctx.path // 获取 url 里面的 :xxx 参数
    const query = request.query  // 获取 url ? 后的参数
    const body = request.body // 获取 body 里面的参数
    const header = request.header // 获取 header

    const v = new PositiveIntegerValidator().validate(ctx)
    // 自动转换成数字了，
    const id = v.get('path.id',parsed = false)
})

module.exports = router