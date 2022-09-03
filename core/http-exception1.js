
class HttpException extends Error {
    constructor(message = "服务器错误", errorCode = 10000, status = 400) {
        super()
        this.status = status;
        this.errorCode = errorCode;
        this.message = message;
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.status = 400;
        this.errorCode = errorCode || 10001;
        this.message = msg || "参数错误";
    }
}


module.exports = {
    HttpException,
    ParameterException,
}
