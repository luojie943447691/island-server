const jwt = require('jsonwebtoken')
const { security } = require('../app/config/config')
const generateToken = (uid, scope) => {
    const secretKey = security.secretKey
    const expiresIn = security.expiresIn
    const token = jwt.sign({
        uid, scope
    }, secretKey, {
        expiresIn
    })
}

module.exports = {
    generateToken
}