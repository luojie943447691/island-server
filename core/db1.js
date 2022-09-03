const { database: { dbName, port, user, password, host } } = global.config
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbName, user, password, {
    host,
    dialect: 'mysql',
    port,
    logging: true,
    timezone: '+08:00',
});

(async () => {
    // 测试数据库
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

module.exports = {
    db:sequelize
}