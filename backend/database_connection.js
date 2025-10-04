const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");


const app = express();
const  PORT = 3000; // Express Server Port.
const DB_NAME = "Innovation"; // Our Database name I guess

app.use(cors());
app.use(express.json());

const dbInit = mysql.createConnection({ //Host, user and password should ok. Unless it has been configured to other things.
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
      database: DB_NAME,
    });

    db.connect (err => {
        if (err) {
            console.error(`Error connecting to database ${DB_NAME}:`, err);
            return;
        }
        console.log("Connected to MySQL databse");
        // User table creation
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
    console.log("Received data:", req.body); // Without this, we don't know what went wrong.
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        app.locals.db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err){
                console.error(err);

                if (err.code === 'ER_DUP_ENTRY') {
                // Tells user an account with his name on it already exist.
                const field = err.sqlMessage.includes('username') ? 'Username' : 'Email';
                return res.status(409).send(`${field} already exists.`);
                }

                return res.status(500).send("Error registering user.");
            }
            res.status(201).send("User registered successfully!");// Success Code
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error.");
    }
})

/*
This is used to display all the users in the database table.
For now this is basically useless.
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
