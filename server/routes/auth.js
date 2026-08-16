const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { readData, writeData } = require("../utils/jsonStore");

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

// POST /api/auth/signup - { name, email, password }
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Name is required." });
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ message: "A valid email is required." });
  }
  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters." });
  }

  const users = readData("users.json");
  const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    name: name.trim(),
    email: email.toLowerCase(),
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  writeData("users.json", users);

  const { passwordHash: _omit, ...safeUser } = newUser;
  res.status(201).json({ user: safeUser });
});

module.exports = router;
