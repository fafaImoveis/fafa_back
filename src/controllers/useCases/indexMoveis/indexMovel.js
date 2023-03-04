module.exports = {
    index: async (req, res, model) =>{
        const moveis = await model.findAll({include:  'Images'});
        res.json(moveis);
    },
};