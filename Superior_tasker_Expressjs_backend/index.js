const express = require('express');
const connectDB = require('./task-management-backend/config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

// Define routes
app.use('/api/auth', require('./task-management-backend/routes/authRoutes'));
app.use('/api/projects', require('./task-management-backend/routes/projectRoutes'));
app.use('/api/tasks', require('./task-management-backend/routes/taskRoute'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
