const multer = require("multer");
const {v4: uuidv4} = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cd){
        cd(null, "./pulic/uploads")
    },
    filename: function(req, file, cd){
        cd(null, `${uuidv4()}_${path.extname(file.originalname)}`)
    }
})

const fileFilter = (req, file, cd) =>{
    const allowedFileType = ["image/jpeg","image/jpg","image/png"];

    if(allowedFileType.includes(file.mimetype)){
        cd(null, true);
    }else{
        cd(null, false);
    }
}

const uploadMiddleware = multer({storage, fileFilter})

module.exports = uploadMiddleware;