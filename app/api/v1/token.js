const Router = require('koa-router')
const { TokenValidator } = require('../../volidators/validator')
const router = new Router({
    prefix: '/v1/token'
})

router.post('/', async (ctx) => {
    const v = await new TokenValidator().validate(ctx)

})

module.exports = router