const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => res.send('API Running'));
// Connect Database
// connectDB();

//Init Middleware
// app.use(express.json({ extended: false }));
// app.use(cors());

// Define Routes
// app.use('/api/users', require('./routes/api/users'));
// 



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));