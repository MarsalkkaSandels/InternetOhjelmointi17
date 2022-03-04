const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()
const connectionString = process.env.SQL_SERVER
const connection = mysql.createPool({connectionString})
module.exports = connection