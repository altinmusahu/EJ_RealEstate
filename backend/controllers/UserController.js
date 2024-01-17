const sql = require('mssql');
const dbConfig = require('../db/DBConn');
const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();
const crypto = require("crypto");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Assuming this is the registration or signup endpoint
exports.insertUser = async (req, res, next) => {
  try {
    const { Username, Email, Password, Role } = req.body;

    if (!Username || !Email || !Password || !Role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const hashedPassword = await bcrypt.hash(Password, 10); // Hash the password with bcrypt

    const pool = await sql.connect(dbConfig);
    await pool.request()
      .input('Username', sql.NVarChar(50), Username)
      .input('Email', sql.NVarChar(100), Email)
      .input('Password', sql.NVarChar(100), hashedPassword)
      .input('Role', sql.NVarChar(50), Role)
      .query('INSERT INTO Users (Username, Email, Password, Role) VALUES (@Username, @Email, @Password, @Role)');

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



  exports.getAllUsers = async (req, res) => {
    try {
      await poolConnect;
  
      const request = pool.request();
  
      const query = 'SELECT * FROM Users';
  
      const result = await request.query(query);
  
      const users = result.recordset;
  
      res.status(200).json({ users });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const { UserID } = req.params;
      console.log('Received UserID:', UserID);
  
      await poolConnect;
  
      const request = pool.request();
  
      const query = `
        DELETE FROM Users
        WHERE UserID = @UserID
      `;
  
      request.input('UserID', sql.Int, UserID);

        const result = await request.query(query);
      if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error.message);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const { UserID } = req.params; // Assuming userId is passed as a route parameter
      const { Username, Email, Password } = req.body;
  
      if (!Username && !Email && !Password) {
        return res.status(400).json({ error: 'At least one field (Username, Email, Password) is required for update' });
      }
  
      await poolConnect; // Wait for the connection to be established
  
      const request = pool.request();
  
      // SQL query to update a user by UserID
      let query = 'UPDATE Users SET ';
  
      const queryParams = [];
      if (Username) {
        query += 'Username = @Username, ';
        request.input('Username', sql.NVarChar(50), Username);
      }
      if (Email) {
        query += 'Email = @Email, ';
        request.input('Email', sql.NVarChar(100), Email);
      }
      if (Password) {
        query += 'Password = @Password, ';
        request.input('Password', sql.NVarChar(100), Password);
      }
  
      query = query.slice(0, -2); // Remove the trailing comma and space
      query += ' WHERE UserID = @UserID';
      request.input('UserID', sql.Int, UserID);
  
      // Execute the query
      const result = await request.query(query);
  
      if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ error: 'Failed to update user' });
    }
  };