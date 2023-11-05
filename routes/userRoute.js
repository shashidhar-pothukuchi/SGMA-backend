const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// User Registration
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.create({ username, password, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Could not create user" });
  }
});

// User Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      if (user.password === password) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
