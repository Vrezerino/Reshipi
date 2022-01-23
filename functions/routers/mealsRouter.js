const mealsRouter = require('express').Router();
//const knex = require('../db');
const meals = require('../data/allMeals.json');

mealsRouter.get('/', (req, res) => {
	res.json(meals);
});

module.exports = mealsRouter;