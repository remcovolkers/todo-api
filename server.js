const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database!');
}).catch((error) => {
    console.log('Error connecting to database:', error);
});

// Import routes
const todoRoutes = require('./src/routes/todos');

// Use routes
app.use('/api', todoRoutes);

// Use middleware to parse incoming JSON data
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
