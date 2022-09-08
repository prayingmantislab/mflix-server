const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');


// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));