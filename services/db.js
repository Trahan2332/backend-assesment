const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config();

console.log(process.env.DATABASE_USER)

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT
})

pool.on('connect', () => {
  console.log('Connected to database')
})

module.exports = pool