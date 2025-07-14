const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pool = require('./db'); // Your PostgreSQL pool connection

const app = express();
const PORT = 3000;

//  CORS middleware before anything else
app.use(cors());
app.use(express.json());

//  Signup Route
app.post('/signup', async (req, res) => {
  const { name, student_id, password, department } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO student_info (name, student_id, password, department) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, student_id, hashedPassword, department]
    );

    res.status(201).json({ message: 'Signup successful!', userId: result.rows[0].id });
  } catch (err) {
    console.error(' DB Insert Error:', err);
    if (err.code === '23505') {
      res.status(400).json({ error: 'Student ID already exists' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
