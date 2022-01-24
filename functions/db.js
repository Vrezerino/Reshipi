const path = require('path');
// Get location of database.sqlite file.
const dbPath = path.resolve(__dirname, 'db/database.sqlite');
// Connect to SQLite database.
const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: dbPath,
	},
	useNullAsDefault: true
});

knex.schema
	.hasTable('users')
	.then(async (exists) => {
		if (!exists) {
			try {
				await knex.schema.createTable('users', (table) => {
					table.increments('id').primary();
					table.string('username');
					table.string('passwordHash');
				});
				console.log('Table \'users\' created');
			} catch (error) {
				console.error(`There was an error creating table: ${error.message}`);
			}
		}
	})
	.then(() => {
		console.log('Database ready!');
	})
	.catch((error) => {
		console.error(`There was an error setting up the database: ${error.message}`);
	});

module.exports = knex;
