const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const  PORT = 3306;

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Innovation",
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    db.query("CREATE DATABASE IF NOT EXIST Innovation", function (err, result){
        if (err) throw err;
        console.log("Database created");
    })
    console.log("Connected to MySQL");
});

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {
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
// asdsadasdsadsa