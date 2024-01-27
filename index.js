const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const Food = require('./models/food');

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

app.listen(3000, function () {
    console.log("server is running");
})