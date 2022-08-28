async function handleError(ctx, next){
    try {
        await next()
    }
    catch (error) {
        console.log("123",error.message);
        ctx.body = "服务器错误"
    }
}

module.exports = handleError