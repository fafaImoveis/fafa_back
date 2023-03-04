const mail = require('../../../services/mail');
const crypto = require('crypto');

module.exports = {
    recover: async (req, res, model) => {
       const hash = crypto.randomBytes(4).toString('hex');
       const date = new Date();
       const expires = date.getHours(date.getHours()) + 1;

       try {
           const newPassword = await model.create({newPass: hash, expires});
    
           const send_mail = await mail.sendMail({
                from: 'Recover password <ryandias1315@gmail.com>',
                to: 'durma155@gmail.com',
                subject: 'Recover your password',
                text: `Your code: ${hash}`,
            });
    
            res.json({message: "OK", senha: newPassword, error: false});
       } catch (err) {
        res.json({error: true, err});
       }
    },
};