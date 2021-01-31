const webToken = require('jsonwebtoken');
const {jwt} = require('../../config');

exports.verify = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) res.status(403).json({error: "please provide a token"});
    else {
      webToken.verify(token.split(" ")[1], jwt.secret, (err, value) => {
            if (err) res.status(500).json({error: 'failed to authenticate token'})
            req.user = value.data
            next()
        })
    }
}
