const router = require('express').Router();
//const knex = require('../db');
const meals = require('../data/allMeals.json');

router.get('/', (req, res) => {
	res.json(meals);
});

module.exports = router;