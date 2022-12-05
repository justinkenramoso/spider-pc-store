// importing packages
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// Home
router.get("", (req, res) => {
  res.render("home");
});

// About
router.get("/about", (req, res) => {
  res.render("about");
});

// Contact
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
