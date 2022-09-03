const { dbName, port, user, password, host } = require('../app/config/config').database
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbName, user, password, {
    host,
    dialect: 'mysql',
    port,
    logging: true,
    timezone: '+08:00',
    define: {
        // 这个打开数据库会自动生成两个字段 createAt,updateAt
        timestamps: true,
        // 需要开启 timestamps 。软删除，会生成 deleteAt 字段，即被删除的时候更新该字段，
        paranoid: true,
        createdAt: "createTimestamp",
        updatedAt: "updateTimestamp",
        deletedAt: "destroyTime",
        underscored: true, // 开启 蛇形命名法
    }
});

(async () => {
    // 测试数据库
    try {
        await sequelize.authenticate();
        await sequelize.sync({ 
            force: false, // 强制删除表，记住在实绩工作中必须设置成 false 
        }) // 必须调用 这个方法，否则不会根据 model 自动生成数据库的表对象
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();



module.exports = {
    db: sequelize
}