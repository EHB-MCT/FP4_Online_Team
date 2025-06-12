const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Client } = require("ssh2");

const corsOptions = {
	origin: "*",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));


// CSP Headers (Momenteel fout?)
//app.use((req, res, next) => {
//	res.setHeader("Content-Security-Policy",
//		"default-src 'none'; " +
//		"img-src 'self' data: https://shiftfestival.be; " +
//		"style-src 'self' 'unsafe-inline' fonts.googleapis.com use.typekit.net p.typekit.net;" +
//		"font-src fonts.gstatic.com use.typekit.net; " +
//		"script-src 'self' 'unsafe-inline'; " +
//		"connect-src 'self';"
//	);
//	next();
//});

// Frontend
// app.use(express.static(path.join(__dirname, '/www')));

// app.get('/*\w', (req, res) => {
//     res.sendFile(path.join(__dirname, '/www/index.html'));
// });

// Database volgens SSH
// MySQL & SSH Config

const dbConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: 3306,
};

const tunnelConfig = {
    host: process.env.DB_SSH_HOST,
    port: 22,
    username: process.env.DB_SSH_USER,
    privateKey: fs.readFileSync(process.env.SSH_PK_PATH)
};
const forwardConfig = {
	srcHost: "127.0.0.1",
	srcPort: 3306,
	dstHost: dbConfig.host,
	dstPort: dbConfig.port,
};

// Dynamic SSH Tunnel and MySQL Connection (per request)
function createSshTunnelAndConnection(callback) {
	const ssh = new Client();

	ssh
		.on("ready", () => {
			ssh.forwardOut(forwardConfig.srcHost, forwardConfig.srcPort, forwardConfig.dstHost, forwardConfig.dstPort, (err, stream) => {
				if (err) {
					ssh.end();
					return callback(err);
				}

				const connection = mysql.createConnection({
					...dbConfig,
					stream,
				});

				connection.connect((error) => {
					if (error) {
						stream.destroy();
						ssh.end();
						return callback(error);
					}

					connection.on("end", () => ssh.end());
					connection.on("error", () => ssh.end());

					callback(null, connection);
				});
			});
		})
		.connect(tunnelConfig);

	ssh.on("error", (err) => {
		callback(err);
	});
}

// Email Transport
const transporter = nodemailer.createTransport({
	host: "smtp-auth.mailprotect.be",
	port: 465,
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
	logger: true,
});

const sendEmail = async (to, name) => {
	try {
		const info = await transporter.sendMail({
			from: '"Shift Festival" <info@shiftfestival.be>',
			to,
			subject: `Welkom bij Shift Festival, ${name}!`,
			text: `Hallo ${name}, bedankt voor je inschrijving bij Shift Festival! We kijken ernaar uit om je te verwelkomen.`,

			html: `
          <div style="font-family: 'Arial', sans-serif; background-color: #ffffff; color: #333; padding: 40px; max-width: 600px; margin: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <img src="https://shiftfestival.be/Logo.svg" alt="Shift Logo" style="width: 120px; margin-bottom: 30px;">

            <h1 style="color: #E62474; font-size: 28px; margin-bottom: 10px;">Welkom bij Shift, ${name}!</h1>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Hallo ${name},<br>
              Bedankt voor je inschrijving voor <strong style="color: #97EB4E;">Shift</strong>! 
              We zijn enthousiast om je te verwelkomen op ons evenement.
            </p>

            <h2 style="color: #97EB4E; font-size: 20px; margin-top: 30px;">📍 Waar en wanneer:</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              <strong>Vrijdag 20 juni 2025</strong> van 17:00 tot 21:00 uur <br>
              (doorlopend expo en workshops)<br>
              <strong>Award-uitreiking:</strong> 20:00 uur<br>
              <strong>Locatie:</strong> Erasmushogeschool Brussel,<br> 
              Nijverheidskaai 170, 1070 Anderlecht
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
              Alle info vind je op de <a href="https://shiftfestival.be" target="_blank" style="color: #E62474; text-decoration: none;">website</a>.
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
              Vergeet zeker niet om je in te schrijven voor de barbecue!
            </p>

            <div style="margin: 30px 0; text-align: center;">
              <a href="https://shiftfestival.be" style="background-color: #97EB4E; color: #000; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                Bekijk Website
              </a>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              Nogmaals bedankt voor je inschrijving. Tot op <strong style="color: #E62474;">Shift</strong>!
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #666;">
              Met vriendelijke groet,<br>
              Het Promotieteam van Shift<br>
              Studenten Multimedia en Creatieve Technologie,<br>
              Erasmushogeschool Brussel
            </p>
          </div>
        `,

		});

		console.log("✅ E-mail succesvol verzonden naar:", to);
		console.log("📩 Bericht ID:", info.messageId);
	} catch (error) {
		console.error("❌ Fout bij verzenden e-mail:", error);
	}
};

// Test API route
app.get("/api", (req, res) => {
	res.json({ fruits: ["apple", "banana", "grape"] });
});

// Form submission route
app.post("/api/submit-register-form", (req, res) => {
	createSshTunnelAndConnection((err, connection) => {
		if (err) {
			console.error("SSH/DB connection failed:", err);
			return res.status(500).json({ message: "Database connection error" });
		}

		const { firstName, lastName, email, roles, amount, message, subscribeToUpdates } = req.body;

		if (!firstName || !lastName || !email || !roles || !amount) {
			connection.end();
			return res.status(400).json({ message: "All fields are required" });
		}

		const checkMailQuery = `SELECT COUNT(*) AS email_count FROM event_registrations WHERE email = ?`;
		connection.query(checkMailQuery, [email], (err, results) => {
			if (err) {
				console.error("Query error:", err);
				connection.end();
				return res.status(500).json({ message: "Database query error" });
			}

			if (results[0].email_count !== 0) {
				connection.end();
				return res.status(409).json({ message: "Email is reeds gebruikt" });
			}

			const role = roles[0];
			const roleName = role.role;
			const companyName = role.companyName;
			const sponsor = role.sponsorship;

			const sql = `
                INSERT INTO event_registrations
                (first_name, last_name, email, num_attendees, message, wants_event_updates, role, company_name, wants_sponsorship)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

			const values = [firstName, lastName, email, amount, message, subscribeToUpdates ? 1 : 0, roleName, companyName, sponsor];

			connection.query(sql, values, (err, result) => {
				connection.end();

				if (err) {
					console.error("Insert error:", err);
					return res.status(500).json({ message: "Database insert error" });
				}

				res.status(200).json({ message: "Data inserted successfully" });
				getAttendeeCountAndBroadcast();
				sendEmail(email, firstName);
			});
		});
	});
});

app.get("/api/counter", (req, res) => {
	createSshTunnelAndConnection((err, connection) => {
		if (err) {
			console.error("SSH/DB connection failed:", err);
			return res.status(500).json({ message: "Database connection error" });
		}

		const countUsers = `SELECT SUM(num_attendees) AS total FROM event_registrations`;

		connection.query(countUsers, (err, results) => {
			connection.end();

			if (err) {
				console.error("Error querying database:", err);
				return res.status(500).json({ message: "Sorry something went wrong" });
			}

			res.json({ count: results[0].total || 0 });
		});
	});
});

app.get('/api/attendee-stream', (req, res) => {
	res.set({
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
	});
	res.flushHeaders();

	clients.push(res);

	createSshTunnelAndConnection((err, connection) => {
		if (!err) {
			connection.query("SELECT SUM(num_attendees) AS total FROM event_registrations", (err, results) => {
				connection.end();
				if (!err) {
					const count = results[0].total;
					res.write(`data: ${JSON.stringify({ count })}\n\n`);
				}
			});
		}
	});

	req.on('close', () => {
		const index = clients.indexOf(res);
		if (index !== -1) clients.splice(index, 1);
	});
});

const getAttendeeCountAndBroadcast = () => {
	createSshTunnelAndConnection((err, connection) => {
		if (err) return console.error("Error counting attendees:", err);

		const countQuery = "SELECT SUM(num_attendees) AS total FROM event_registrations";
		connection.query(countQuery, (err, results) => {
			connection.end();
			if (err) return console.error("Count query failed:", err);

			const count = results[0].total;
			broadcastAttendeeCount(count);
		});
	});
};

// Your broadcast function
const clients = [];

const broadcastAttendeeCount = (count) => {
	const data = `data: ${JSON.stringify({ count })}\n\n`;
	clients.forEach((client) => client.write(data));
};

// Starten app
app.listen(3000, () => {
	console.log("Server started on port 3000");
});
