const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllProperties,
  insertProperties, 
} = require("../controllers/PropertiesController");



router.get("/getproperties", getAllProperties);

module.exports = router;
