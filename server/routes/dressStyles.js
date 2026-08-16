const express = require("express");
const router = express.Router();
const { readData } = require("../utils/jsonStore");

// GET /api/dress-styles
router.get("/", (req, res) => {
  const styles = readData("dressStyles.json");
  res.json(styles);
});

module.exports = router;
