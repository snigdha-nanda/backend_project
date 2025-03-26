const mongoose = require('mongoose');
const subscriberModel = require('./models/subscribers');
const data = require('./data');

// Connect to the MongoDB database using MongoDB Compass connection string
const DATABASE_URL = "mongodb://localhost:27017/subscribers";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err) => console.log('Connection error:', err));
db.once('open', () => {
    console.log('Connected to the database');
    refreshAll();
});

// Function to clear the database and insert the sample data
const refreshAll = async () => {
    try {
        await subscriberModel.deleteMany({}); // Remove existing subscribers
        await subscriberModel.insertMany(data); // Insert sample data
        console.log('Database refreshed with sample data');
        await mongoose.disconnect();
    } catch (error) {
        console.log('Error refreshing database:', error);
    }
};
