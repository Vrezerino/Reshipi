/* eslint-disable no-unused-vars */
const userRouter = require('express').Router();
const knex = require('../db');
const bcrypt = require('bcrypt');

userRouter.post('/', async (req, res, next) => {
	res.header('Access-Control-Allow-Headers: Content-Type');
	const body = req.body;
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(body.password, saltRounds);

	const user = ({
		username: body.username,
		passwordHash,
	});

	try {
		const savedUser = await knex('users').insert(user);
		res.json(savedUser);
	} catch (e) {
		res.json(e);
	}
});

userRouter.get('/', (req, res, next) => {
	knex
		.select('*')
		.from('users')
		.then(users => {
			res.json(users);
		})
		.catch(e => {
			res.json(e);
		});
});

module.exports = userRouter;