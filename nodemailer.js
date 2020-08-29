const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.mail.ru',
	port: 465,
	secure: true,
	auth: {
		user: '7okay@mail.ru',
		pass: 'Huzimi15',
	},
});

const mailer = message => {
	transporter.sendMail(message, (err, info) => {
		if (err) return console.log(err);
		console.log('email sent: ', info);
	});
};

module.exports = mailer;
