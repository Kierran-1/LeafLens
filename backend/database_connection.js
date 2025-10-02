const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");


const app = express();
const  PORT = 3000;
const DB_NAME = "Innovation";

app.use(cors());
app.use(express.json());

const dbInit = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

dbInit.connect(err => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    dbInit.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`,  (err) => {
        if (err) throw err;
        console.log(`Database ${DB_NAME} created`);
    })

    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "Innovation",
    });

    db.connect (err => {
        if (err) {
            console.error(`Error connecting to database ${DB_NAME}:`, err);
            return;
        }
        console.log("Connected to MySQL databse");

        const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL UNIQUE,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        db.query(createUsersTable, (err) => {
            if (err) throw err;
            console.log("Users table created!");
        });
        app.locals.db = db;
    });
});



app.post("/users", async (req, res) => {
    console.log("Received data:", req.body);
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        app.locals.db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err){
                console.error(err);
                return res.status(500).send("Error registering user.");
            }
            res.status(201).send("User registered successfully!");
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error.");
    }
})

/*
This is used to display all the users in the database table.
For now there is no use for this.
*/ 
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";

    app.locals.db.query(sql, (err, result) => {
        if (err) {
            console.error("Error fetching users:", err);
            res.status(500).send("Error fetching users");
            return;
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
})
