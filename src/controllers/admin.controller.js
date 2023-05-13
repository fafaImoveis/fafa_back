const { access } = require("./useCases/admin/password");
const Recover_model = require('../database/models/Recover.model');

module.exports = {
    login: async (req, res) => {
        await Recover_model.sync();
        access(req, res, Recover_model);
    },
};