const express = require('express');
const app = express();
const PORT = require('./utils').PORT;

app.use(express.static('dist'));

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});

app.get('/ping', (_req, res) => {
	res.send('pong');
});

app.get('version', (_req, res) => {
	res.send('1');
});
