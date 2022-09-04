module.exports = {
    // prod 
    enviroment: 'dev',
    database: {
        dbName: 'island',
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
    },
    security: {
        secretKey: "wj0jlkf1Ajo6P7a2qms12APHaukaxmnx",
        expiresIn: 60 * 60 * 24 * 30 // 一个月过期时间
    }
}