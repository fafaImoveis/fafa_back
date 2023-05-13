const { add, search } = require("./useCases/Categories/Add_categories")

const Categories_model = require('../database/models/Categories.model');

module.exports = {
    store_category: async (req, res) => {
        await Categories_model.sync();
        add(req, res, Categories_model);
    },
    index_category: async (req, res) => {
        await Categories_model.sync();
        search(req, res, Categories_model);
    },
}