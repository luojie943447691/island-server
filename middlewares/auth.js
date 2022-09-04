const jwt = require('jsonwebtoken')
const basicAuth = require('basic-auth')
const { Forbbiden } = require('../core/http-exception1')
const { security } = require('../app/config/config')
class Auth {
    // 权限用户
    static USER = 8; // 普通用户
    static ADMIN = 16; // 管理员
    constructor(level) {
        // 当前 api 的权限，通过比较 level 和  USER 或者 ADMIN 大小决定该 api 是否可用
        this.level = level || 1
    }

    get m() {
        return async (ctx, next) => {
            const userToken = basicAuth(ctx.request)
            let msg = 'token不合法'
            if (!userToken || !userToken.name) {
                throw new Forbbiden(msg)
            }

            try {
                var decode = jwt.verify(userToken.name, security.secretKey)
            }
            catch (error) {
                const name = error.name
                // token 不合法 比如 传递了个 abc 
                if (name === 'TokenExpiredError') {
                    msg = 'token已过期'
                }
                throw new Forbbiden(msg)
            }

            if(this.level > Auth.USER){
                msg = '权限不足'
                throw new Forbbiden(msg)
            }

            ctx.auth = {
                uid: decode.uid,
                scope: decode.scope
            }

            await next()
        }
    }
}

module.exports = {
    Auth
}