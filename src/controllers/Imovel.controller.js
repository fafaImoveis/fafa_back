const Imovel_model = require('../database/models/Imovel.model');
const Image_model = require('../database/models/Image.model');
const Recover_model = require('../database/models/Recover.model');
const Category_model = require('../database/models/Categories.model');

const { create } = require('./useCases/createMovel/create');
const { index } = require('./useCases/indexMoveis/indexMovel');
const { store } = require('./useCases/uploadImage/upload');
const { login } = require('./useCases/admin/password');
const { recover } = require('./useCases/admin/recoverPass');
const { delete_ } = require('./useCases/DeleteImovel/delete');

module.exports = {
    store: async (req, res) => {
        await Imovel_model.sync();
        create(req, res, Imovel_model);
    },
    index: async (req, res) => {
        await Imovel_model.sync();
        await Image_model.sync();
        index(req, res, Imovel_model);
    },
    access: async (req, res) => {
        login(req, res, Recover_model);
    },
    recover_pass: async (req, res) => {
       await Recover_model.sync(); 
       recover(req, res, Recover_model);
    },
    upload: async (req, res) => {
        await Image_model.sync();
        store(req, res, Image_model);
    },
    delete_imovel: async (req, res) => {
        delete_(req, res, Imovel_model)
    } 
};