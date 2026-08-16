const express = require("express");
const router = express.Router({ mergeParams: true });
const { readData, writeData } = require("../utils/jsonStore");

// GET /api/products/:id/reviews
router.get("/", (req, res) => {
  const reviews = readData("reviews.json").filter(
    (r) => r.productId === Number(req.params.id)
  );
  res.json(reviews);
});

// POST /api/products/:id/reviews - add a review { name, rating, text }
router.post("/", (req, res) => {
  const { name, rating, text } = req.body;

  if (!name || !rating || !text) {
    return res.status(400).json({ message: "name, rating and text are required" });
  }

  const reviews = readData("reviews.json");
  const newReview = {
    id: Date.now(),
    productId: Number(req.params.id),
    name,
    verified: false,
    rating: Number(rating),
    text,
    date: new Date().toISOString().slice(0, 10),
  };

  reviews.push(newReview);
  writeData("reviews.json", reviews);
  res.status(201).json(newReview);
});

module.exports = router;
