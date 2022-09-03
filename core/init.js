var requireDirectory = require('require-directory');
const Router = require('koa-router')
const { resolve } = require('path')
const curPath = process.cwd()

class InitManeger {
    static app;
    static initCore(app) {
        InitManeger.app = app
        InitManeger.initConfig()
        InitManeger.initLoadRoutes()
        InitManeger.initExceptions()
    }

    // 初始化路由
    static initLoadRoutes() {
        // module 固定写法
        // "./api/v1" 指定拥有 router 的路径
        requireDirectory(module, resolve(curPath, "./app/api/v1"), {
            visit: (obj) => {
                // 判断当前对象是否是一个Router，这种判断方式很简单，只适用于导出时没有使用大括号的方式，如果使用了大括号，这里的判断逻辑相对就会复杂一些
                if (obj instanceof Router) {
                    InitManeger.app.use(obj.routes());
                }
            }
        })
    }
    // 全局导入异常 
    static initExceptions(){
        const errors = require(resolve(curPath,'./core/http-exception1'))
        // 在 nodejs 中，有个 global 全局变量
        global.errors = errors
    }

    // 全局导入 自定义配置文件
    static initConfig(){
        const config = require(resolve(curPath,'./app/config/config'))
        global.config = config
    }
    
}

module.exports = InitManeger