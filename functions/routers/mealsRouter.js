/* eslint-disable no-unused-vars */
const mealsRouter = require('express').Router();
//const knex = require('../db');
const meals = require('../data/allMeals.json');

mealsRouter.get('/', (req, res, next) => {
	res.json(meals);
});

module.exports = mealsRouter;