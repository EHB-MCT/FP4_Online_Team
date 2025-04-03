require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "ftp.shiftfestivalbe.webhosting.be",
	port: 21,
	secure: false,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

const sendEmail = async (to, name) => {
	try {
		const info = await transporter.sendMail({
			from: '"Shift Festival" <info@shiftfestival.be>',
			to: to,
			subject: `Welkom bij Shift Festival, ${name}!`,
			text: `Hallo ${name}, bedankt voor je inschrijving bij Shift Festival! We kijken ernaar uit om je te verwelkomen.`,
			html: `<h1>Welkom bij Shift Festival, ${name}!</h1>
                   <p>Hallo ${name},</p>
                   <p>Bedankt voor je inschrijving bij <strong>Shift Festival</strong>! We kijken ernaar uit om je daar te zien.</p>
                   <p>Met vriendelijke groet,</p>
                   <p>Het Shift Festival Team</p>`,
		});

		console.log("✅ E-mail succesvol verzonden naar:", to);
		console.log("📩 Bericht ID:", info.messageId);
	} catch (error) {
		console.error("❌ Fout bij verzenden e-mail:", error);
	}
};
sendEmail("matgiamop@gmail.com", "Mat");
