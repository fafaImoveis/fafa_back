module.exports = {
    create: async (req, res, model) => {
        const Imovel_create = await model.create(req.body);
        res.json(Imovel_create);
    },
};