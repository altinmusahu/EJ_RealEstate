const app = require('./index');
const sql = require('mssql');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


// app.use(cors());
app.use(bodyParser.json());
dotenv.config({ path: './config.env' });

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};


//All the Edit function code:
// Get users 

app.get("/api/getusers", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Users'); 

    const users = result.recordset;
    res.json({ users });
  } 
  catch (error) {
    console.error('Error fetching users:', error);
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
