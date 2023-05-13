module.exports = {
    add: async (req, res, model) => {
        try{
            const { modo_pagamento, tipo_de_imovel, cidade } = req.body;
            const createCategory = await model.create({ modo_pagamento, tipo_de_imovel, cidade });
            res.json({createCategory, error: false});
        }catch(err){
            res.json({error: true, err});
        };
    },

    search: async (req, res, model) => {
        const index_categories = await model.findAll({});
        res.json(index_categories);
    },
}