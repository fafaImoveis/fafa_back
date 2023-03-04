const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const multer_s3 = require('multer-s3');
const aws = require('aws-sdk');


//configs secrets credentials

aws.config.update({
    secretAccessKey: 'PkCfGzqm8bd8gbH/5pzj1K/38lSInbUu3L/nrWsi',
    accessKeyId: 'AKIAXADE2TIPVYAPKA7Q',
});

const s3_ = new aws.S3();

//Options for storage

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', 'tmp', 'uploads'));
        },
        filename: (req, file, callback) => {
            const hash = crypto.randomBytes(10).toString('hex');
            const filename = `${hash} - ${file.originalname}`;
            callback(null, filename);
        },
    }),


    Amazon_aws: multer_s3({
        s3: s3_,
        bucket: 'uploadforimoveis',
        contentType: multer_s3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, callback) =>{
            const hash = crypto.randomBytes(16).toString('hex');
            const filename = `${hash} - ${file.originalname}`;
            callback(null, filename);
        },
    }),
};




//Multer configs

module.exports = {
    dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
    storage: storageTypes['Amazon_aws'],
    fileFilter: (req, file, callback) => {
        const allowFiles = ['image/jpg', 
                            'image/jpeg', 
                            'image/png'];
        if(!allowFiles.includes(file.mimetype)){
            callback(new Error('invalid file type.'));
        }else{
            callback(null, true);
        }
    },
    limits:{
        fileSize: 10 * 1024 * 1024,
    },
};