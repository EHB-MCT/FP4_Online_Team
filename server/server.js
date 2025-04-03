const express = require("express");
const app = express();
const mysql = require("mysql2");
require('dotenv').config()
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
    } else {
      console.log('Connected to MySQL database!');
    }
});

app.get("/api", (req, res) => {
    res.json({fruits: ["apple", "banana", "grape"]});
});

app.post("/api/submit-register-form", (req, res) => {
    const { firstName, lastName, email, roles, amount, message, subscribeToUpdates } = req.body;

    if (!firstName || !lastName || !email || !roles || !amount) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const checkMailQuery = `SELECT COUNT(*) AS email_count FROM event_registrations WHERE email = ?`;
    db.query(checkMailQuery, [email], (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).json({ message: "Sorry something went wrong" });
        }

        if (results[0].email_count !== 0) {
            return res.status(409).json({ message: "Email is reeds gebruikt" });
        }

        const role = roles[0];
        const roleName = role.role;
        const companyName = role.companyName;
        const sponsor = role.sponsorship;
    
        const sql = "INSERT INTO event_registrations (first_name, last_name, email, num_attendees, message, wants_event_updates, role, company_name, wants_sponsorship) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [firstName, lastName, email, amount, message, [subscribeToUpdates ? 1 : 0], roleName, companyName, sponsor], (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ message: "Sorry somethin went wrong" });
            }
            res.status(200).json({ message: "Data inserted successfully" });
        });
    });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});