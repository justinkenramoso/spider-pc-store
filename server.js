const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, ".", "views"));

// .env
require("dotenv").config();
const port = process.env.PORT || 5700;
const host = process.env.HOST || "localhost";

// Routes
const pageRoutes = require("./routes/pageRoutes");
app.use("/", pageRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running.");
    console.log(`Host: ${host}`);
    console.log(`Port: ${port}`);
  }
});
