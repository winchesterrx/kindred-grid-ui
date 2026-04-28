const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'santacasapf.mysql.uhserver.com',
  user: process.env.DB_USER || 'paulodefaria',
  password: process.env.DB_PASSWORD || '@Saopaulop45',
  database: process.env.DB_NAME || 'santacasapf',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
