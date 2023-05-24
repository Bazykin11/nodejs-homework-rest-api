/** @format */

const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirPath = path.join(__dirname,'../tmp');
        cb(null, dirPath);
             console.log(dirPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
  storage,
});


module.exports = upload;