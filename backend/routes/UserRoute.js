const express = require("express");
const router = express.Router();
const {
    insertUser,
    getAllUsers,
    deleteUser,
    updateUser
    } = require("../controllers/UserController");

router.post("/insertuser", insertUser);
router.get('/getusers', getAllUsers);
router.delete("/deleteuser/:UserID", deleteUser);
router.put("/updateuser/:userID", updateUser);


module.exports = router;
