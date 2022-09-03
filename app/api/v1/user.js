const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/user'
})

const { RegisterValidator } = require('../../volidators/validator')
const { User } = require('../../models/user')
const { Success } = require('../../../core/http-exception1')


router.post('/register', async (ctx) => {
    // 编写一个 api 的思路
    // 接受的参数需要经过校验  email password1 password2 nickName
    const v = await new RegisterValidator().validate(ctx)

    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickName: v.get('body.nickName'),
    }
    const res = await User.create(user)
    // 最后处理成功，我们也用抛出异常的方式
    throw new Success()
})


module.exports = router