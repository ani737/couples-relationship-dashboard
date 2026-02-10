const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Route imports
const userRoutes = require('./routes/userRoutes');
const coupleRoutes = require('./routes/coupleRoutes');
const memoryRoutes = require('./routes/memoryRoutes');
const milestoneRoutes = require('./routes/milestoneRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Couples Relationship Dashboard API is running...' });
});

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/couples', coupleRoutes);
app.use('/api/v1/memories', memoryRoutes);
app.use('/api/v1/milestones', milestoneRoutes);

// Authentication Routes (Placeholders)
app.post('/api/v1/auth/register', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

app.post('/api/v1/auth/login', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/couples-dashboard';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
