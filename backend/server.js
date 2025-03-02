const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'your_mongodb_connection_string_here';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => console.error('MongoDB Connection Error ❌', err));

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// Routes

// GET all transactions
app.get('/api/transactions', async (req, res) => {
  console.log(`Received GET request at: ${req.originalUrl}`);
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new transaction
app.post('/api/transactions', async (req, res) => {
  console.log(`Received POST request at: ${req.originalUrl}`);
  console.log('Request Body:', req.body);

  try {
    const { amount, description } = req.body;
    if (!amount || !description) {
      return res.status(400).json({ error: 'Amount and description are required!' });
    }
    const transaction = new Transaction({ amount, description });
    await transaction.save();
    res.status(201).json({ message: 'Transaction saved successfully', transaction });
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
