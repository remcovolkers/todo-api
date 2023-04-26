const express = require('express');
const app = express();

// Import routes
const todoRoutes = require('./src/routes/todos');

// Use routes
app.use('/api', todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.json());