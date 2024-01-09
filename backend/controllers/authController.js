const sql = require('mssql');
const dbConfig = require('../db/DBConn');
const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();
const crypto = require("crypto");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());
// ...rest of your code

exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log('Received Request Body:', req.body);
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Email or password missing' });
      }
  
      const pool = await sql.connect(dbConfig);
      const result = await pool.request()
        .input('Email', sql.NVarChar(100), email)
        .query('SELECT * FROM Users WHERE Email = @Email');
  
      console.log('SQL Query Executed:', result);
  
      if (!result.recordset || result.recordset.length === 0) {
        return res.status(401).json({ message: 'Email not found!' });
      }
  
      const user = result.recordset[0];
      const hashedPassword = user.Password;
  
      if (!hashedPassword) {
        return res.status(500).json({ message: 'Hashed password not found for the user' });
      }
  
      const passwordMatch = await bcrypt.compare(password, hashedPassword);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Email or password not correct!' });
      }
  
      const token = jwt.sign(
        { UserId: user.UserID },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
      );
  
      return res.status(200).json({
        token: token,
        Role: user.Role,
        UserId: user.UserID,
        Name: user.Username,
        Email: user.Email
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  