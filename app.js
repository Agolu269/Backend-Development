const express = require("express");

const app = express();

// Route 1: Home
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Backend Development Lab!");
});

// Route 2: About
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Sai Charan",
        section: "Your Section"
    });
});

// Route 3: Current Date and Time
app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// Route 4: Unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});