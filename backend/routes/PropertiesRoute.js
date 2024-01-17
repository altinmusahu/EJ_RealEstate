const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllProperties,
  getPropertie,
  updateProperty
} = require("../controllers/PropertiesController");



router.get("/getproperties", getAllProperties);
router.get("/getPropertie/:PropertyID", getPropertie);
router.put("/editproperty/:PropertyID", updateProperty);



module.exports = router;
