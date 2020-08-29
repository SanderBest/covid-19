const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./nodemailer');

const app = express();

let user = undefined;

const PORT = 8080;

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/index', (req, res) => {
	const message = {
		from: '<7okay@mail.ru>',
		to: '<7okay@mail.ru>',
		subject: 'covid-19',
		text: `email for connect: ${req.body.email}`,
	};
	mailer(message);
	console.log(req.body);
	user = req.body;
	res.redirect('/index');
});

app.get('/index', (req, res) => {
	if (typeof user !== 'object') return res.sendFile(__dirname + '/index.html');
	user = undefined;
});

app.listen(PORT, () =>
	console.log(`server launched on the port http://localhost:${PORT}/index`),
);
