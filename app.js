// app.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const shareClassRoutes = require('./routes/shareClassRoutes');
const stakeholderRoutes = require('./routes/stakeholderRoutes');
const documentRoutes = require('./routes/documentRoutes');
const fundraisingRoundRoutes = require('./routes/fundraisingRoundRoutes');
const equityPlanRoutes = require('./routes/equityPlanRoutes');
const documentEmbeddingRoutes = require('./routes/documentEmbeddingRoutes'); 
const employeeRoutes = require('./routes/employeeRoutes');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/shareClasses', shareClassRoutes);
app.use('/api/stakeholders', stakeholderRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/fundraisingRounds', fundraisingRoundRoutes);
app.use('/api/equityPlans', equityPlanRoutes);
app.use('/api/documentEmbeddings', documentEmbeddingRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/activities', activityRoutes);

module.exports = app; // Only export the Express app
