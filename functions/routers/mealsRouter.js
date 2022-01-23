const router = require('express').Router();
//const knex = require('../db');
import { meals as allMeals } from '../data/allMeals.json';

router.get('/', (req, res) => {
	res.json(allMeals);
});

module.exports = router;