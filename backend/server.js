const app = require('./index');
const sql = require('mssql');
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
dotenv.config({ path: './config.env' });
const express = require("express");
const path = require("path");
const multer=require("multer");



const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

app.use(express.static(path.join(__dirname, "utils")));



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
