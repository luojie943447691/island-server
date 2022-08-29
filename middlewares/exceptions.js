const { HttpException } = require('../core/http-exception1')
async function handleError(ctx, next) {
    try {
        await next()
    }
    catch (error) {
        // error 里面有堆栈调用信息
        // error 需要简化之后返回给前端
        // HTTP Status Code 2xx 4xx 5xx
        // 但是由于 http 状态码是很模糊的，所以我们还需要以下字段 

        // errorCode 详细的状态码，只不过这个错误码是由开发者自己定义的
        // message 详细的文字说明
        // 异常分为 已知异常 和 未知异常
        // 已知异常，如 我们自己抛出的错误
        // 未知异常，如 账号密码错误、代码本身出错

        // * 版本一：异常抛出
        // 由于我们设置的 拥有 errorCode 的就是已知异常 
        // if(error.errorCode){
        //     ctx.body = {
        //         msg:error.message,
        //         errorCode:error.errorCode,
        //         request:error.requestUrl
        //     }
        //     ctx.status = error.status
        // }
        // else{
        // }

        // * 版本二：抛出异常
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.message,
                errorCode: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.status
        }
        else {

        }
    }
}

module.exports = handleError