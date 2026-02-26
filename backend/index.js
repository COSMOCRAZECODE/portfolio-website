const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const messageRouter = require('./routes/messages');
app.use('/messages', messageRouter);

// DB Connection Removed
// mongoose.connect(...) has been removed to prevent timeout issues since we only need email functionality.

// Example route
app.get('/', (req, res) => {
    res.send('Portfolio Backend API Running');
});

const http = require('http');

// Start Server explicitly with HTTP to prevent arbitrary event-loop exits
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Force the process to stay alive
setInterval(() => { }, 1000 * 60 * 60);
