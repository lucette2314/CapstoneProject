const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const Foods = require('../models/foods');
const Drinks = require('../models/drinks');


router.get('/profile', verifyToken, function(req, res){
    const foodId = req.foodId;

    Foods.findByPk(foodId).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/profile', verifyToken, function(req, res){
    const drinkId = req.foodId;

    Drinks.findByPk(drinkId).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;