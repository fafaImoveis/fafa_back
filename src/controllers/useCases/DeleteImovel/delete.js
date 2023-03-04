module.exports = {
    delete_: async (req, res, model) => {
        const { imovel_id } = req.params;
        const imovel = await model.destroy({ where: { id: imovel_id } });
        res.json({Message: "OK"});
    },
}