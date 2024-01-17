const express = require("express");
const router = express.Router();
const {
    insertPropertyTypes,
    getPropertiesByType,
    getAllPropertiesType
    } = require("../controllers/PTypeController");

router.post("/insertPropertyType", insertPropertyTypes);
router.get('/getpropertiesbytype/:propertyTypeId', getPropertiesByType);
router.get('/getpropertiestype',getAllPropertiesType );



module.exports = router;
