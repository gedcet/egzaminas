const crypto = require("crypto")

//hash
const hash_and_digest_to_base64 = (parameter_1) =>
{
            let hash =  crypto.createHash('SHA-256')

            hash.update(parameter_1)

            return hash.digest("base64")    
}

module.exports = hash_and_digest_to_base64