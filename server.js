const express = require('express');
const connectDB = require('./config/db');
const app = express();
// const cors = require('cors');

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

//Init Middleware
app.use(express.json({ extended: false }));
// app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/movies', require('./routes/api/movies'));
// 



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));