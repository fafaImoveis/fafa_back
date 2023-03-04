module.exports = {
    store: async (req, res, model) => {
        const { location: url, filename, size } = req.file;
        const { imovel_id } = req.params;
        try{
        const ImageUp = await model.create({url, filename, size, imovel_id});
        res.json({ImageUp, error: false});
        }catch(err){
            res.json({error: true, err});
        }
    },
};