const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // your username
  host: 'localhost',
  database: 'student_portal', // the one where you created the table
  password: '123admin', // what you set during install
  port: 5432,
});

module.exports = pool;
