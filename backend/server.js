require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');
const connectDB = require('./config/connectDB');

const app = express();

//connect to mongoDB
connectDB();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

const PORT = process.env.PORT || 3000;

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});