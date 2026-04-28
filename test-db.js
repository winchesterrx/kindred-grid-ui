const mysql = require('mysql2/promise');

async function test() {
  try {
    const pool = mysql.createPool({
      host: 'santacasapf.mysql.uhserver.com',
      user: 'paulodefaria',
      password: '@Saopaulop45',
      database: 'santacasapf',
      connectTimeout: 10000
    });
    console.log("Tentando conectar...");
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log("Conectou!", rows);
    process.exit(0);
  } catch(e) {
    console.error("Erro:", e);
    process.exit(1);
  }
}
test();
