const express = require("express");
const router = express.Router();
const { readData } = require("../utils/jsonStore");

// GET /api/testimonials
router.get("/", (req, res) => {
  const testimonials = readData("testimonials.json");
  res.json(testimonials);
});

module.exports = router;
