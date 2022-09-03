const bcrypt = require('bcryptjs')
const { db } = require('../../core/db1')

const { Sequelize, Model } = require('sequelize')


class User extends Model {

}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nickName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING(128),
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        set(val) {
            // 生成 盐 ，用于加密
            const salt = bcrypt.genSaltSync(10)
            const password = bcrypt.hashSync(val, salt)
            this.setDataValue("password",password)
        }
    },
    openid: {
        type: Sequelize.STRING(64),
        unique: true
    }
}, {
    sequelize: db,
    tableName: 'user'
})

module.exports = {
    User
}