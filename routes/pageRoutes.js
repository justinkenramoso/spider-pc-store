// importing packages
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// Home
router.get("", (req, res) => {
  const locals = {
    title: "Home | Spider PC Store",
    home: true,
  };
  res.render("home", { locals });
});

// About
router.get("/about", (req, res) => {
  const locals = {
    title: "About | Spider PC Store",
    about: true,
  };
  res.render("about", { locals });
});

// Contact
router.get("/contact", (req, res) => {
  const locals = {
    title: "Contact | Spider PC Store",
    contact: true,
  };
  res.render("contact", { locals });
});

module.exports = router;
