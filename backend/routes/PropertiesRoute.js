const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
    insertProperties
    } = require("../controllers/PropertiesController");

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "public/images");
        },
        filename: (req, file, cb) => {
          cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
          );
        },
      });

      const upload = multer({
        storage: storage,
      });

router.post("/insertproperties",upload.single("Image"), insertProperties);


module.exports = router;
