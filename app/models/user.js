const bcrypt = require('bcryptjs')
const { db } = require('../../core/db1')

const { Sequelize, Model } = require('sequelize')
const { AuthFailed } = require('../../core/http-exception1')


class User extends Model {
    static async verifyEmailPassword(email, plainPassword) {
        const user = await User.findOne({
            where: {
                email
            }
        })
        if (!user || !user.id) {
            throw new AuthFailed("用户不存在")
        }

        const correct = bcrypt.compareSync(plainPassword,user.password)
        if(!correct){
            throw new AuthFailed("密码不正确") 
        }

        return user
    }
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
            this.setDataValue("password", password)
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