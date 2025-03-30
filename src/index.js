const express = require('express');
const app = require('./app'); 
const mongoose = require('mongoose');
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB connection string from MongoDB Compass
const DATABASE_URL = "mongodb+srv://snigdhanandasn:paws@081002@cluster0.sfecl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Make sure the MongoDB Compass URI is correct

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log('Connection error:', err));
db.once('open', () => {
    console.log('Connected to the database');
    app.listen(port, () => console.log(`App listening on port ${port}!`)); // Start the server
});
