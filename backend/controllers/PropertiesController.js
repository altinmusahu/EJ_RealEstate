const sql = require('mssql');
const dbConfig = require('../db/DBConn');
const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

exports.insertProperties = async (req, res) => {
  try {
    const {
      PropertyName,
      PropertyTypeID,
      Price,
      Description,
      Address,
      City,
      Bedrooms,
      Bathrooms,
      SquareFeet,
      IsAvailable,
      Image, // This assumes the image data is sent in the request body
    } = req.body;

    // Validate required fields
    if (!PropertyName || !PropertyTypeID || !Price || !Description || !Address || !City || !Bedrooms || !Bathrooms || !SquareFeet || !IsAvailable || !Image) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await poolConnect;

    const request = pool.request();

    const query = `
      INSERT INTO Properties (PropertyName, PropertyTypeID, Price, Description, Address, City, Bedrooms, Bathrooms, SquareFeet, IsAvailable, Image)
      VALUES (@PropertyName, @PropertyTypeID, @Price, @Description, @Address, @City, @Bedrooms, @Bathrooms, @SquareFeet, @IsAvailable, @Image)
    `;

    // Input parameters for the SQL query
    request.input('PropertyName', sql.NVarChar(100), PropertyName);
    request.input('PropertyTypeID', sql.Int, PropertyTypeID);
    request.input('Price', sql.Decimal(18, 2), Price);
    request.input('Description', sql.NVarChar(sql.MAX), Description);
    request.input('Address', sql.NVarChar(255), Address);
    request.input('City', sql.NVarChar(100), City);
    request.input('Bedrooms', sql.Int, Bedrooms);
    request.input('Bathrooms', sql.Int, Bathrooms);
    request.input('SquareFeet', sql.Decimal(18, 2), SquareFeet);
    request.input('IsAvailable', sql.Bit, IsAvailable);
    request.input('Image', sql.NVarChar(255), Image); // Change to NVARCHAR for storing base64-encoded string
    
    const result = await request.query(query);

    res.status(200).json({ message: 'Property inserted successfully', result });
  } catch (error) {
    console.error('Error inserting Property:', error.message);
    console.error('Stack trace:', error.stack); // Add this line
    res.status(500).json({ error: 'Failed to insert Property' });
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    await poolConnect;

    const request = pool.request();

    const query = 'SELECT * FROM Properties';

    const result = await request.query(query);

    const properties = result.recordset;

    res.status(200).json({ properties });
  } catch (error) {
    console.error('Error fetching properties:', error.message);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
};

exports.getPropertie = async (req, res) => {
  try {
    const PropertyID = req.params.PropertyID;

    await poolConnect;

    const request = pool.request();

    const query = `
      SELECT * FROM Properties WHERE PropertyID = @PropertyID
    `;

    request.input('PropertyID', sql.Int, PropertyID);

    const result = await request.query(query);

    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.error('Error fetching property:', error.message);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
};
  

exports.updateProperty = async (req, res) => {
  try {
    const { PropertyID } = req.params; // Assuming propertyId is passed as a route parameter
    const {
      PropertyName,
      PropertyTypeID,
      Price,
      Description,
      Address,
      City,
      Bedrooms,
      Bathrooms,
      SquareFeet,
      IsAvailable,
      Image,
    } = req.body;

    if (
      !PropertyName &&
      !PropertyTypeID &&
      !Price &&
      !Description &&
      !Address &&
      !City &&
      !Bedrooms &&
      !Bathrooms &&
      !SquareFeet &&
      !IsAvailable &&
      !Image
    ) {
      return res.status(400).json({
        error:
          'At least one field (PropertyName, PropertyTypeID, Price, Description, Address, City, Bedrooms, Bathrooms, SquareFeet, IsAvailable, Image) is required for update',
      });
    }

    await poolConnect; // Wait for the connection to be established

    const request = pool.request();

    // SQL query to update a property by PropertyID
    let query = 'UPDATE Properties SET ';

    const queryParams = [];
    if (PropertyName) {
      query += 'PropertyName = @PropertyName, ';
      request.input('PropertyName', sql.NVarChar(100), PropertyName);
    }
    if (PropertyTypeID) {
      query += 'PropertyTypeID = @PropertyTypeID, ';
      request.input('PropertyTypeID', sql.Int, PropertyTypeID);
    }
    if (Price) {
      query += 'Price = @Price, ';
      request.input('Price', sql.Decimal(18, 2), Price);
    }
    if (Description) {
      query += 'Description = @Description, ';
      request.input('Description', sql.NVarChar(sql.MAX), Description);
    }
    if (Address) {
      query += 'Address = @Address, ';
      request.input('Address', sql.NVarChar(255), Address);
    }
    if (City) {
      query += 'City = @City, ';
      request.input('City', sql.NVarChar(100), City);
    }
    if (Bedrooms) {
      query += 'Bedrooms = @Bedrooms, ';
      request.input('Bedrooms', sql.Int, Bedrooms);
    }
    if (Bathrooms) {
      query += 'Bathrooms = @Bathrooms, ';
      request.input('Bathrooms', sql.Int, Bathrooms);
    }
    if (SquareFeet) {
      query += 'SquareFeet = @SquareFeet, ';
      request.input('SquareFeet', sql.Decimal(18, 2), SquareFeet);
    }
    if (IsAvailable) {
      query += 'IsAvailable = @IsAvailable, ';
      request.input('IsAvailable', sql.Bit, IsAvailable);
    }
    if (Image) {
      query += 'Image = @Image, ';
      request.input('Image', sql.NVarChar(255), Image);
    }

    query = query.slice(0, -2); // Remove the trailing comma and space
    query += ' WHERE PropertyID = @PropertyID';
    request.input('PropertyID', sql.Int, PropertyID);

    // Execute the query
    const result = await request.query(query);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.status(200).json({ message: 'Property updated successfully' });
  } catch (error) {
    console.error('Error updating property:', error.message);
    res.status(500).json({ error: 'Failed to update property' });
  }
};
