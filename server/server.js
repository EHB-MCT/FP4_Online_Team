const express = require("express");
const app = express();
const mysql = require("mysql");
require('dotenv').config()
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:5173"],
};

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
})

app.listen(8080, () => {
    console.log("Server started on port 8080");
})