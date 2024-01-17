const app = require('./index');
const sql = require('mssql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  // optionsSuccessStatus: 204,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


// app.use(cors());
app.use(bodyParser.json());
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // The folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file with a timestamp to avoid overwriting
  },
});

const upload = multer({ storage: storage });




//All the Edit function code:
// Get users 

app.get("/api/getusers", async (req, res) => {
  //pagination
  const page = req.query.page || 1;
  const offset = (page - 1) * usersPerPage;
  //
  try {
    const pool = await sql.connect(config);
    const result = await pool
    .request()
    .query(`SELECT * FROM Users ORDER BY UserID OFFSET ${offset} ROWS FETCH NEXT ${usersPerPage} ROWS ONLY`);
    
    const users = result.recordset;
    res.json({ users });
  } 
  catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//Create users function
app.post("/api/addproperty", upload.single("Image"), async (req, res) => {
  const newProperty = req.body;
  newProperty.Image = req.file.filename; // Set the filename in the 'Image' property


  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('PropertyName', sql.NVarChar(100), newProperty.PropertyName)
      .input('PropertyTypeID', sql.Int, newProperty.PropertyTypeID)
      .input('Price', sql.Decimal(18, 2), newProperty.Price)
      .input('Description', sql.NVarChar(sql.MAX), newProperty.Description)
      .input('Address', sql.NVarChar(255), newProperty.Address)
      .input('City', sql.NVarChar(100), newProperty.City)
      .input('Bedrooms', sql.Int, newProperty.Bedrooms)
      .input('Bathrooms', sql.Int, newProperty.Bathrooms)
      .input('SquareFeet', sql.Decimal(18, 2), newProperty.SquareFeet)
      .input('IsAvailable', sql.Bit, newProperty.IsAvailable || 1)
      .input('Image', sql.NVarChar(255), newProperty.Image)
      .query(`
        INSERT INTO Properties (
          PropertyName, PropertyTypeID, Price, Description, Address, City,
          Bedrooms, Bathrooms, SquareFeet, IsAvailable, CreatedAt, Image
        ) 
        VALUES (
          @PropertyName, @PropertyTypeID, @Price, @Description, @Address, @City,
          @Bedrooms, @Bathrooms, @SquareFeet, @IsAvailable, CURRENT_TIMESTAMP, @Image
        );
        SELECT SCOPE_IDENTITY() AS PropertyID
      `);

    const propertyId = result.recordset[0].PropertyID;
    const createdProperty = { PropertyID: propertyId, ...newProperty };

    res.json({ success: true, property: createdProperty });
  } catch (error) {
    console.error('Error adding property:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



// Edit users
app.put("/api/edituser", async (req, res) => {
  const editedUser = req.body;

  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('UserID', sql.Int, editedUser.UserID) 
      .input('Username', sql.NVarChar(255), editedUser.Username)
      .input('Email', sql.NVarChar(255), editedUser.Email)
      .input('Role', sql.NVarChar(50), editedUser.Role)
      .query('UPDATE Users SET Username = @Username, Email = @Email, Role = @Role WHERE UserID = @UserID');

    if (result.rowsAffected[0] > 0) {
      res.json({ success: true, message: 'User edited successfully' });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error editing user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
