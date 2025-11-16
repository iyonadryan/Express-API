const express = require("express");
const authController = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

// contoh endpoint butuh jwt
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Success", user: req.user });
});

module.exports = router;
