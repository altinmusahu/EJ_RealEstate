const express = require("express");
const router = express.Router();
const {
    insertPropertyTypes,
    getPropertiesByType
    } = require("../controllers/PTypeController");

router.post("/insertPropertyType", insertPropertyTypes);
router.get('/getpropertiesbytype/:propertyTypeId', getPropertiesByType);



module.exports = router;
