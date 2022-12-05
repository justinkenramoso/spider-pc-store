const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://vercel-admin-user:poJB37URCKMHVOVR@spider.g1jss7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Trying to use asynchronous functions. Not very familiar with it.
const connect = async () => {
  await mongoose
    .connect(dbUrl, connectionParams)
    .then(() => {
      console.log("DB Connected.");
    })
    .catch((e) => {
      console.log(e);
    });
};

connect();

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

// Get All (new)
exports.all = async function (req, res) {
  await ProductsModel.find({}, function (err, data) {
    if (!err) {
      res.render("products", { data });
    } else {
      throw err;
    }
  })
    .lean()
    .clone()
    .catch(function (err) {
      console.log(err);
    });
};

// // Get All
// exports.all = (req, res) => {
//   ProductsModel.find((err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//       res.render("products", { data });
//     }
//   }).lean();
// };

// Insert
exports.insert = (req, res) => {
  const productsModel = new ProductsModel();
  productsModel.product_id = Date.now();
  productsModel.name =
    "Gigabyte B450 Aouros Pro Wifi with 4+2 Phase IR Digital PWM, Intel Dual Band 802.11ac Socket Am4 Ddr4 Gaming Motherboard";
  productsModel.price = "₱8,450.00";
  productsModel.image =
    "https://cdn.shopify.com/s/files/1/0101/4864/2879/products/1218-a_540x.jpg?v=1587045645";
  productsModel.specs =
    "<ul><li>Brand: GIGABYTE</li><li>Model: B450 AORUS PRO WIFI (rev. 1.0)</li><li>CPU Socket Type: AM4</li><li>CPU Type: Supports AMD 3rd Gen Ryzen/2nd Gen Ryzen/1st Gen Ryzen / 2nd Gen Ryzen with Radeon Vega Graphics/1st Gen Ryzen with Radeon Vega Graphics / Athlon with Radeon Vega Graphics Processors</li><li>Chipset: AMD B450</li><li>Number of Memory Slots: 4×288pin</li><li>Memory Standard: Support for DDR4 3600(O.C.)/ 3466(O.C.)/ 3200(O.C.)/ 2933/ 2667/ 2400/ 2133 MHz memory modules</li><li>Maximum Memory Supported: 128GB</li><li>Channel Supported: Dual Channel</li><li>PCI Express 3.0 x16: 1 x PCI Express x16 slot, running at x16 (PCIEX16)</li><li>PCI Express 2.0 x16: 1 x PCI Express x16 slot, running at x4 (PCIEX4), 1 x PCI Express x16 slot, running at x1 (PCIEX1_2)</li><li>PCI Express x1: 1 x PCI Express x1 slot (PCIEX1_1)</li><li>Other Slots: 1 x M.2 Socket 1 connector for a wireless communication module (M2_WI-FI)</li><li>SATA 6Gb/s: 6 x SATA 6Gb/s</li><li>M.2: 1 x M.2 connector (Socket 3, M key, type 2242/2260/2280/22110 SATA and PCIe 3.0 x4/x2 SSD support) (M2A_SOCKET) 1 x M.2 connector (Socket 3, M key, type 2242/2260/2280 PCIe 3.0 x2 SSD support) (M2B_SOCKET)</li><li>Audio Chipset: Realtek ALC1220-VB codec</li><li>Audio Channels: 2/4/5.1/7.1-channel Support for S/PDIF Out</li><li>LAN Chipset: Intel GbE LAN chip</li><li>Max LAN Speed: 10/100/1000Mbps</li><li>Wireless LAN: Wi-Fi 802.11 a/b/g/n/ac, supporting 2.4/5 GHz Dual-Band</li><li>Support for 11 ac wireless standard and up to 433 Mbps data rate</li><li>Bluetooth: BLUETOOTH 4.2</li><li>Back I/O Ports:</li><li>1 x HDMI port</li><li>2 x SMA antenna connectors (1T1R)</li><li>1 x DVI-D port</li><li>4 x USB 3.1 Gen 1 ports</li><li>1 x USB Type-C port, with USB 3.1 Gen 2 support</li><li>1 x USB 3.1 Gen 2 Type-A port (red)</li><li>1 x RJ-45 port</li><li>1 x optical S/PDIF Out connector</li><li>5 x audio jacks</li><li>Onboard USB: 1 x USB 3.1 Gen 1 header 2 x USB 2.0/1.1 headers</li><li>Form Factor: ATX</li><li>LED Lighting: RGB</li><li>Dimensions (W x L): 12.0' x 9.6'</li><li>Power Pin: 1 x 24-pin ATX main power connector 1 x 8-pin ATX 12V power connector</li></ul>";
  productsModel.category = "Motherboard";

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

// Categorize
exports.categorize = (req, res) => {
  res.send("hoorah");
};

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
