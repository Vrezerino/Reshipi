const functions = require('firebase-functions');
const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
const mealsRouter = require('./routers/mealsRouter');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/meals', mealsRouter);
app.get('/api/health', (req, res) => {
	res.send('ok');
});
exports.api = functions.https.onRequest(app);