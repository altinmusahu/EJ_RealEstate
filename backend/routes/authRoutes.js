const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const jwt = require("jsonwebtoken");


router.post("/login", authController.login);


router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});


router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Access granted" });
});

module.exports = router;
