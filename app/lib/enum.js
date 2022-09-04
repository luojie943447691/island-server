const isThisType = (val) => {
    const values = Object.values(LoginType)
    return values.findIndex(m => m === Number(val)) !== -1
}

const LoginType = {
    USER_MINI_PROGRAM: 100, // 小程序的登录方式
    USER_EMAIL: 101, // 邮箱登录 即 账号 + 密码 登录。
    USER_MOBILE: 102, // 手机号登录 

    isThisType,
}

module.exports = {
    LoginType
}