
const Pool = require('pg').Pool;

const pool  = new Pool ({
    user: 'postgres',
    password: '1234567',
    host: 'localhost',
    database: 'todolist',
    port: 5432
});

module.exports = pool;