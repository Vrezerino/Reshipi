const userRouter = require('express').Router();
const knex = require('../db');
const bcrypt = require('bcrypt');

userRouter.post('/', async (req, res) => {
	const body = req.body;
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(body.password, saltRounds);

	const user = ({
		username: body.username,
		name: body.name,
		passwordHash,
	});

	let savedUser;
	try {
		savedUser = await knex('users').insert(user);
	} catch (e) {
		res.json(e);
	}
	res.json(savedUser);
});

userRouter.get('/', (req, res) => {
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