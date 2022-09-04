const Router = require('koa-router')
const { resolve } = require('path')
const { ParameterException } = require('../../../core/http-exception1')
const { Auth } = require('../../../middlewares/auth')
const { PositiveIntegerValidator } = require('../../volidators/validator')

const router = new Router({
    prefix: '/v1/classic'
})

router.get("/latest", new Auth(9).m, async (ctx, next) => {

    ctx.body = { a: ctx.auth.scope }
})

module.exports = router