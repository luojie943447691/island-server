
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
        this.errorCode = errorCode || 10000;
        this.message = msg || "参数错误";
    }
}

class Success extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.status = 201;
        this.errorCode = errorCode || 0;
        this.message = msg || "ok";
    }
}

class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.status = 404;
        this.errorCode = errorCode || 10040;
        this.message = msg || "资源未找到";
    }
}

class AuthFailed extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.status = 401;
        this.errorCode = errorCode || 10010;
        this.message = msg || "授权失败";
    }
}

class Forbbiden extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.status = 403;
        this.errorCode = errorCode || 10030;
        this.message = msg || "禁止访问";
    }
}

module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbbiden,
}
