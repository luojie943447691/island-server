const Router = require('koa-router')
const { ParameterException } = require('../../../core/http-exception1')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')
const { TokenValidator } = require('../../volidators/validator')
const router = new Router({
    prefix: '/v1/token'
})

router.post('/', async (ctx) => {
    const v = await new TokenValidator().validate(ctx)
    let token = null;
    // 处理 type 
    switch (v.get('body.type')) {
        case LoginType.USER_EMAIL: // 处理 email
            const account = v.get('body.account') // 这个就是 eamial 
            const secret = v.get('body.secret')
            token = await emailLogin(account, secret)
            break;
        case LoginType.USER_MINI_PROGRAM: // 处理 小程序

            break;
        default:
            throw new ParameterException('没有检测到相应的处理函数');
    }
    ctx.body = {
        token
    }
})

const emailLogin = async (account, secret) => {
    const user = await User.verifyEmailPassword(account, secret)
    // 生成 token 令牌 
    // 
    const token = generateToken(user.id, Auth.USER)
    return token
}

module.exports = router