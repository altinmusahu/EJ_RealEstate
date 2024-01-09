const express = require("express");
const router = express.Router();
const {
    insertPropertyTypes
    } = require("../controllers/PTypeController");

router.post("/insertPropertyType", insertPropertyTypes);


module.exports = router;
