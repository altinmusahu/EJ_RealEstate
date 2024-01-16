const sql = require('mssql');
const dbConfig = require('../db/DBConn');
const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

exports.insertPropertyTypes = async (req, res) => {
    try {
      const { PropertyTypeName } = req.body;
  
      if (!PropertyTypeName) {
        return res.status(400).json({ error: 'PropertyTypeName' });
      }
  
      await poolConnect;
  
      const request = pool.request();
  
      // SQL query to insert a new user
      const query = `
        INSERT INTO PropertyTypes (PropertyTypeName)
        VALUES (@PropertyTypeName)
      `;
  
      // Input parameters for the SQL query
      request.input('PropertyTypeName', sql.NVarChar(50), PropertyTypeName);


  
      // Execute the query
      const result = await request.query(query);
  
      res.status(200).json({ message: 'PRopertyType inserted successfully', result });
    } catch (error) {
      console.error('Error inserting Property:', error.message);
      res.status(500).json({ error: 'Failed to insert Property' });
    }
  };

  exports.getPropertiesByType = async (req, res) => {
    try {
      await poolConnect;
  
      const request = pool.request();
  
      const { propertyTypeId } = req.params;
  
      // Query to fetch properties by property type
      const query = `
        SELECT * FROM Properties
        WHERE PropertyTypeID = @PropertyTypeID
      `;
  
      request.input('PropertyTypeID', sql.Int, parseInt(propertyTypeId, 10)); // Parse to integer
  
      const result = await request.query(query);
  
      const propertiesByID = result.recordset;
      res.status(200).json(propertiesByID); // Send the array directly

  
    } catch (error) {
      console.error('Error fetching properties by type:', error.message);
      res.status(500).json({ error: 'Failed to fetch properties by type' });
    }
  };