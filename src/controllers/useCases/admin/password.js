const jwt = require('jsonwebtoken');

const generate_token = (params = {}) => {
    return jwt.sign(params, process.env.JWT_PAYLOAD, {
        expiresIn: 84000,
    });
};

module.exports = {
    access: async (req, res, model) => {
        const { newPass } = req.body;
        const pass = await model.findOne({ where: { newPass: newPass }});
        if(pass == null){
            return res.json({Error: "Password invalid!", pass: false,});
        }else {
            res.json({ pass: true, senha: pass, token: generate_token({ id: pass.id }) });
        };
    },
};