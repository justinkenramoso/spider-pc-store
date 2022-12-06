// importing packages
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// Products
router.get("/all", productsController.all);

// Insert
router.post("/insert", productsController.insert);

// Categories
router.get("/category", productsController.categorize);

// Routes
router.get("/search", productsController.search);

module.exports = router;
