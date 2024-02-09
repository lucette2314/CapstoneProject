const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const Foods = require('../models/foods');

router.get('/profile', verifyToken, function(req, res){
    const foodId = req.foodId;

    Foods.findByPk(foodId).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;