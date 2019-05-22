const token = require('../config/wx-public').TOKEN

const checkSignature = ({ signature, timestamp, nonce }) => {
    // 排序并生成字符串
    const str =[token, timestamp, nonce]
        .sort()
        .reduce((acc, item) => acc + item, '')
    // sha1 加密
    const sha1Code = getSha1(str)
    // 返回比较结果
    return sha1Code === signature
}

const getSha1 = (str) => {
    const jsSHA = require('jssha')
    const shaObj = new jsSHA("SHA-1", "TEXT")
    shaObj.update(str)
    return shaObj.getHash("HEX")
}

module.exports = checkSignature