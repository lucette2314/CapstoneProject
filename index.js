const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const Food = require('./models/food');
const Drink = require('./models/drink');
const Promotion = require('./models/promotions');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

config.authenticate()
    .then(function () {
        console.log("Database is connected")
    })
    .catch(function (error) {
        console.log(error)
    })

app.post('/foods', function (req, res) {
    let food = req.body;
    let foodInfo = {};

    foodInfo.name = req.body.name;
    foodInfo.food_category = req.body.food_category;
    foodInfo.description = req.body.description;
    foodInfo.price = parseFloat(req.body.price);

    console.log(food)
    Food.create(food) //insert into () value
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(function (error) {
            res.status(500).send(error);
        })
})

app.post('/drinks', function (req, res) {
    let drink = req.body;
    let drinkInfo = {};

    drinkInfo.name = req.body.name;
    drinkInfo.drink_category = req.body.drink_category;
    drinkInfo.description = req.body.description;
    drinkInfo.price = parseFloat(req.body.price);

    console.log(drink)
    Drink.create(drink) //insert into () value
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(function (error) {
            res.status(500).send(error);
        })
})

app.post('/promotions', function (req, res) {
    let promotion = req.body;
    let promotionInfo = {};

    promotionInfo.title = req.body.title;
    promotionInfo.description = req.body.description;
    promotionInfo.discount = parseFloat (req.body.discount);
    promotionInfo.valid_from = req.body.valid_from;
    promotionInfo.valid_to = req.body.valid_to;

    console.log(promotion)
    Promotion.create(promotion) //insert into () value
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(function (error) {
            res.status(500).send(error);
        })
})






app.listen(3000, function () {
    console.log("server is running");
})