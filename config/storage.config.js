const multer = require('multer')

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        const path = `${__dirname}/../storage`;
        cb(null, path)
    },
    filename: (request, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename)
    }
});

const uploadFile = multer({
    storage: storage
});

module.exports = uploadFile;