const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://vercel-admin-user:poJB37URCKMHVOVR@spider.g1jss7w.mongodb.net/test?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Trying to use asynchronous functions. Not very familiar with it.
mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log("DB Connected.");
  })
  .catch((e) => {
    console.log(e);
  });

const productsSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  specs: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const ProductsModel = mongoose.model("Products", productsSchema);

// Get All
exports.all = (req, res) => {
  ProductsModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("products", { data });
    }
  }).lean();
};

// Categorize
exports.categorize = (req, res) => {
  ProductsModel.find({ category: req.query.category }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.render("products", { data });
    }
  }).lean();
};

// Insert
exports.insert = (req, res) => {
  const productsModel = new ProductsModel();
  productsModel.product_id = Date.now();
  productsModel.name = "Seagate 1tb ST1000DM010 Harddisk Drive";
  productsModel.price = "₱2,159.00";
  productsModel.image =
    "https://cdn.shopify.com/s/files/1/0101/4864/2879/products/160-a_540x.jpg?v=1635836886";
  productsModel.specs = "";
  productsModel.category = "SSD/HDD";

  // Insert to DB
  productsModel.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Inserted");
    }
  });
};

// // View All
// exports.all = (req, res) => {
//   res.send("hooray");
// };

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: process.env.HOST || "localhost",
//   user: process.env.USER || "root",
//   database: process.env.DB || "spider",
//   password: process.env.PASSWORD,
// });

// // View All
// exports.all = (req, res) => {
//   connection.query("SELECT * FROM products;", function (err, results) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(results); // results contains rows returned by server
//       res.render("products", { results });
//     }
//   });
// };

// // Categorize
// exports.categorize = (req, res) => {
//   connection.query(
//     "SELECT * FROM products WHERE category_id = ?;",
//     [req.query.category],
//     function (err, results) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(results); // results contains rows returned by server
//         res.render("products", { results });
//       }
//     }
//   );
// };
