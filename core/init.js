var requireDirectory = require('require-directory');
const Router = require('koa-router')
const { resolve } = require('path')

class InitManeger {
    static app;
    static initCore(app){
        InitManeger.app = app
        InitManeger.initLoadRoutes()
    }

    // 初始化路由
    static initLoadRoutes() {
        // module 固定写法
        // "./api/v1" 指定拥有 router 的路径
        requireDirectory(module, resolve(process.cwd(),"./app/api/v1"), {
            visit: (obj) => {
                // 判断当前对象是否是一个Router，这种判断方式很简单，只适用于导出时没有使用大括号的方式，如果使用了大括号，这里的判断逻辑相对就会复杂一些
                if (obj instanceof Router) {
                    InitManeger.app.use(obj.routes());
                }
            }
        })
    }
    constructor() {
    }
}

module.exports = InitManeger