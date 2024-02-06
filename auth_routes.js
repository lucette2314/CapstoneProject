const express = require('express');
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')},
        filename: function (req, file, cb) {
            cb (null, file.originalname)
        }
    }
);

var upload = multer({storage: storage});

router.post('/addfood', upload.single('food_image'), function(req,res){
    const foodData = req.body;

    if(req.file){
        foodData.image = req.file.filename;
    }
})