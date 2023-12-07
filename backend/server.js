const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const app = require('./index');

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
