const { Router } = require('express');
const multer = require('multer');
const { store, index, access, upload, recover_pass, delete_imovel } = require('./src/controllers/Imovel.controller');

const { store_category, index_category } = require('./src/controllers/categories.controller');

const multer_config = require('./src/configs/multer.config');
const { login } = require('./src/controllers/admin.controller');
const validate_ = require('./src/middlewares/authenticate');

const routes = Router();


routes.get('/', (req, res) => {
    res.json({message: 'hello, Fagundes Imóveis!!'});
});

//----- Create and get Categories -----\\

routes.post('/categories', validate_, store_category);

routes.get('/categories', index_category);


//----- Create Imovel -----\\

routes.post('/imovel_create', validate_, store);

routes.get('/imoveis', index);

routes.delete('/imovel/:imovel_id', validate_, delete_imovel);


//----- Upload image for Imovel ------\\

routes.post('/upload/:imovel_id', validate_, multer(multer_config).single('file'), upload);


//----- Login for add or delete imovel -----\\
routes.post('/login', login);

routes.get('/recover_pass', recover_pass);


module.exports = routes;
