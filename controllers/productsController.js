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

// // Get All (new)
// exports.all = async function (req, res) {
//   await ProductsModel.find({}, function (err, data) {
//     if (!err) {
//       res.render("products", { data });
//     } else {
//       throw err;
//     }
//   })
//     .lean()
//     .clone()
//     .catch(function (err) {
//       console.log(err);
//     });
// };

// Get All
exports.all = (req, res) => {
  ProductsModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
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
      console.log(data);
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
  productsModel.specs =
    "<ul><li>Brand: Seagate</li><li>Specifications: 1 TB</li><li>Standard Model Number: ST1000DM010</li><li>Bytes per Sector: 4,096</li><li>Performance</li><li>Interface: SATA 6Gb/s</li><li>Transfer Rates Supported (Gb/s): 6.0/3.0/1.5</li><li>Max Sustained Data Rate OD Read (MB/s) s: 210MB/s</li><li>Cache, Multi-segmented (MB): 64 32</li><li>Rotational Speed (RPM): 7,200</li><li>Recording Technology: CMR</li><li>Reliability/Data Integrity</li><li>Load/Unload Cycles: 50,000</li><li>Non-recoverable Read Errors per Bits Read: Max - 1 per 10E14</li><li>Power-On Hours (per year): 2,400</li><li>Workload Rate Limit (TB/Year): 55</li><li>Warranty, Limited (years): 2</li><li>Power Management Startup Power (A): 2</li><li>Operating Mode, Typical (W): 5.3</li><li>Idling Average (W): 4.6 W</li><li>Standby Mode/Sleep Mode, Typical (W): 0.94/0.94</li><li>Voltage Tolerance, Inc. Noise: (5 V) ±5%</li><li>Voltage Tolerance, Inc. Noise: (12 V) ±10%</li><li>Environmental/Temperature Operating (ambient, min): 0°C</li><li>Operating (drive case, max): 60°C</li><li>Non-operating (ambient): 40°C – 70°C</li><li>Halogen-free: Yes</li><li>RoHS compliance: Yes</li><li>Physical</li><li>Height (mm/in, max): 19.99 mm/0.787 in</li><li>Width (mm/in, max): 101.85 mm/4.01 in</li><li>Depth (mm/in, max): 146.99 mm/5.787 in</li><li>Weight (g/lb, typical): 400 g/0.88 lb</li><li>Benefits:</li><li>Desktop or all-in-one PCs</li><li>Home servers</li><li>Entry-level direct-attached storage</li><li>devices (DAS)</li><li>Features:</li><li>Cost-effective storage upgrade for laptop or desktop computers</li><li>Store all your games, music, movies and more with up to 4TB of storage</li><li>SATA 6Gb/s interface optimizes burst performance; 64MB Cache</li><li>Seagate Secure models for hardware-based data security</li><li>Instant Secure Erase allows safe and easy drive retirement</li></ul>";
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
