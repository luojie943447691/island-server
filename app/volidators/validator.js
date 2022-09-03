const { LinValidator, Rule } = require('../../core/lin-validator-v2')
const { User } = require('../models/user')

// 正整数校验
class PositiveIntegerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '需要是正整数', { min: 1 })
        ]
    }
}

// 注册校验 
class RegisterValidator extends LinValidator {
    constructor() {
        super()
        this.email = [
            new Rule('isEmail', "不符合Email规范")
        ]
        this.password1 = [
            // 指定范围，安全字符，指定字符
            new Rule('isLength', "密码至少6个字符，最多32个字符", { min: 6, max: 32 }),
            new Rule('matches', "密码不符合规范", /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]/i)
        ]

        this.password2 = this.password1

        this.nickName = [
            new Rule('isLength', "昵称不符合长度规范", { min: 4, max: 32 }),
        ]
    }

    // 自定义规则

    // 校验密码是否一致
    validatePassword(vals) {
        const password1 = vals.body.password1;
        const password2 = vals.body.password2;
        if (password1 !== password2) {
            throw new Error('两个密码不一致！')
        }
    }

    async validateEmail(vals) {
        const email = vals.body.email;
        const res = await User.findOne({
            where: {
                email
            }
        })
        if(res && res.id){
            throw new Error('Email已存在！')
        }
    }
}

module.exports = {
    PositiveIntegerValidator,
    RegisterValidator,
}