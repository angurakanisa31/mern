const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const agentRoutes = require('./routes/agent');
const uploadRoutes = require('./routes/upload');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/agent', agentRoutes);
app.use('/upload', uploadRoutes);


mongoose.connect('mongodb+srv://angurakanisas2023cse:ANSZXZZb39MBWBnB@cluster0.tgopahk.mongodb.net/mern-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));