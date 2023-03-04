const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        res.json({ Error: "No token", token: false });
    };

    const token_parts = authHeader.split(' ');

    if(!token_parts.lentgh === 2){
        res.json({ ERROR: 'Token mal formated!', token: false });
    };

    const [scheme, token] = token_parts;

    if(!/^Bearer$/i.test(scheme)){
        res.json({ Error: 'Token invalid!', token: false });
    };

    jwt.verify(token, process.env.JWT_PAYLOAD, (err, decoded) => {
        if(err){
            res.json({ Error: "Token invalid!", token: false });
        };

        req.userId = decoded.id;

        return next();
    });
};