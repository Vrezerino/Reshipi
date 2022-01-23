const functions = require('firebase-functions');
const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const loginRouter = require('./routers/loginRouter');
const bodyParser = require('body-parser');

app.use(bodyParser);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.get('/health', (req, res) => {
	res.send('ok');
});
exports.api = functions.https.onRequest(app);