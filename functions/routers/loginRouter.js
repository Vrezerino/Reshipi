/* eslint-disable no-unused-vars */
const loginRouter = require('express').Router();
const knex = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

loginRouter.post('/', async (req, res, next) => {
	res.header('Access-Control-Allow-Headers: Content-Type');
	const body = req.body;

	const user = await knex('users').where('username', body.username);
	const passwordCorrect = !user
		? false
		: await bcrypt.compare(body.password, user.passwordHash);

	if (!(user && passwordCorrect)) {
		return res.status(401).json({
			error: 'Invalid username or password'
		});
	}

	const userForToken = {
		username: user.username,
		id: user.id,
	};

	const token = jwt.sign(userForToken, process.env.SECRET);

	res
		.status(200)
		.send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;