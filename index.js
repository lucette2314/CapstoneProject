const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const Food = require('./models/food');
const Drink = require('./models/drink');
const Promotion = require('./models/promotions');
const FoodCategory = require('./models/food_categories.js');
const DrinkCategory = require('./models/drink_categories.js');
const FoodCategories = require('./models/food_categories.js');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/images', express.static('uploads_images'));


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

app.post('/food_categories', function (req, res){
    let foodCategory = req.body;
    let foodCategoryInfo = {};

    foodCategoryInfo.category = req.body.category;

    console.log(foodCategory)
    FoodCategory.create(foodCategory)
    .then(function (results){
        res.status(200).send(results);
    })
    .catch(function (error) {
        res.status(500).send(error);
    })
})

app.post('/drink_categories', function (req, res){
    let drinkCategory = req.body;
    let drinkCategoryInfo = {};

    drinkCategoryInfo.category = req.body.category;

    console.log(drinkCategory)
    DrinkCategory.create(drinkCategory)
    .then(function (results){
        res.status(200).send(results);
    })
    .catch(function (error) {
        res.status(500).send(error);
    })
})

app.delete('/promotions/:promotions_id', function (req, res) {

    let promotions_id = parseInt(req.params.promotions_id);

    Promotion.findByPk(promotions_id)
        .then(function (result) {

            result.destroy()
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    console.log(error)
                    res.status(500).send(error);
                })
        })

})

app.delete('/drinks/:drinks_id', function (req, res) {

    let drinks_id = parseInt(req.params.drinks_id);

    Drink.findByPk(drinks_id)
        .then(function (result) {

            result.destroy()
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    console.log(error)
                    res.status(500).send(error);
                })
        })

})

app.delete('/foods/:foods_id', function (req, res) {

    let foods_id = parseInt(req.params.foods_id);

    Food.findByPk(foods_id)
        .then(function (result) {

            result.destroy()
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    console.log(error)
                    res.status(500).send(error);
                })
        })

})

app.delete('/food_categories/:food_categories_id', function (req, res) {

    let food_categories_id = parseInt(req.params.food_categories_id);

    FoodCategory.findByPk(food_categories_id)
        .then(function (result) {

            result.destroy()
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    console.log(error)
                    res.status(500).send(error);
                })
        })

})

app.delete('/drink_categories/:drink_categories_id', function (req, res) {

    let drink_categories_id = parseInt(req.params.drink_categories_id);

    DrinkCategory.findByPk(drink_categories_id)
        .then(function (result) {

            result.destroy()
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    console.log(error)
                    res.status(500).send(error);
                })
        })

})

app.patch('/foods/:foods_id', function (req, res) {
    let foods_id = parseInt(req.params.foods_id);

    Food.findByPk(foods_id)
        .then(function (results) {
            if (results) {
                results.name = req.body.name;
                results.food_category_id = parseFloat(req.body.food_category_id);
                results.description = req.body.description;
                results.price = parseFloat(req.body.price);

            } else {
                res.status(404).send("food id is not found");
            }
            results.save() //update sql command against the database
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    res.status(500).send(error);
                })
        })

})

app.patch('/drinks/:drinks_id', function (req, res) {
    let drinks_id = parseInt(req.params.drinks_id);

    Drink.findByPk(drinks_id)
        .then(function (results) {
            if (results) {
                results.name = req.body.name;
                results.drink_category_id = parseFloat(req.body.drink_category_id);
                results.description = req.body.description;
                results.price = parseFloat(req.body.price);

            } else {
                res.status(404).send("drink id is not found");
            }
            results.save() //update sql command against the database
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    res.status(500).send(error);
                })
        })

})

app.patch('/promotions/:promotions_id', function (req, res) {
    let promotions_id = parseInt(req.params.promotions_id);

    Promotion.findByPk(promotions_id)
        .then(function (results) {
            if (results) {
                results.title = req.body.title;
                results.description = req.body.description;
                results.discount = parseFloat (req.body.discount);
                results.valid_from = req.body.valid_from;
                results.valid_to = req.body.valid_to;

            } else {
                res.status(404).send("promotion id is not found");
            }
            results.save() //update sql command against the database
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    res.status(500).send(error);
                })
        })
})

app.patch('/food_categories/:food_categories_id', function (req, res) {
    let food_categories_id = parseInt(req.params.food_categories_id);

    FoodCategory.findByPk(food_categories_id)
        .then(function (results) {
            if (results) {
                results.category = req.body.category;
             
            } else {
                res.status(404).send("food category id is not found");
            }
            results.save() 
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    res.status(500).send(error);
                })
        })

})

app.patch('/drink_categories/:drink_categories_id', function (req, res) {
    let drink_categories_id = parseInt(req.params.drink_categories_id);

    DrinkCategory.findByPk(drink_categories_id)
        .then(function (results) {
            if (results) {
                results.category = req.body.category;
             
            } else {
                res.status(404).send("drink category id is not found");
            }
            results.save() 
                .then(function (result) {
                    res.status(200).send(result)
                })
                .catch(function (error) {
                    res.status(500).send(error);
                })
        })

})

app.get('/foods', function (req, res) {
   
    Food.findAll()
      .then(function (results) {
            res.status(200).send(results);
      })
       .catch(function (error) {
          res.status(500).send(error);
        })
})

app.get('/foods/:foodId', function (req,res){
    let foodId= parseInt(req.params.foodId);

    Food.findByPk(foodId)
    .then(function(results){
        if(results){
            res.status(200).send(results);
        }else{
            res.status(404).send("The food ID does not exist");
        }
    })
    .catch(function(error){
        res.status(500).send(error);
    })
})

app.get('/drinks', function (req, res) {

    Drink.findAll()
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(function (error) {
            res.status(500).send(error);
        })
})

app.get('/drinks/:drinkId', function (req,res){
    let drinkId= parseInt(req.params.drinkId);

    Drink.findByPk(drinkId)
    .then(function(results){
        if(results){
            res.status(200).send(results);
        }else{
            res.status(404).send("The drink ID does not exist");
        }
    })
    .catch(function(error){
        res.status(500).send(error);
    })
})

app.get('/promotions', function (req, res) {

    Promotion.findAll()
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(function (error) {
            res.status(500).send(error);
        })
})

app.get('/promotions/:offerId', function (req,res){
    let offerId= parseInt(req.params.offerId);

    Promotion.findByPk(offerId)
    .then(function(results){
        if(results){
            res.status(200).send(results);
        }else{
            res.status(404).send("The offer ID does not exist");
        }
    })
    .catch(function(error){
        res.status(500).send(error);
    })
})


app.get('/food_categories', function (req, res) {

    FoodCategory.findAll()
        .then(function (results) {
            res.status(200).send(results);
        })
        .catch(function (error) {
            res.status(500).send(error);
        })
})

app.get('/drink_categories', function (req, res) {

    DrinkCategory.findAll()
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