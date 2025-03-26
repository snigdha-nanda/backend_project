
const express = require('express');
const app = express();
const Subscriber = require('./models/subscribers');

// Route to fetch all subscribers
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subscribers' });
    }
});

// Route to fetch all subscribers names and subscribed channels
app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribers = await Subscriber.find({}, 'name subscribedChannel');
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subscriber names' });
    }
});

// Route to fetch a specific subscriber by id
app.get('/subscribers/:id', async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);
        if (!subscriber) {
            return res.status(400).json({ message: 'Subscriber not found' });
        }
        res.status(200).json(subscriber);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = app;
