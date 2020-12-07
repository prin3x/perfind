require('dotenv').config();
require('colors');

const express = require('express');
const cors = require('cors');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const productVendorRoutes = require('./routes/productVendorRoutes');
const cartRoutes = require('./routes/cartRoutes');
const passport = require('passport');
const logger = require('morgan');
const uploadFiles = require("./routes/uploadRoutes");
const chargRoutes = require("./routes/chargeRoute");
const checkoutRoutes = require("./routes/checkoutRoutes");


const server = express();

require("./config/passport/passport");
require("./config/passport/passport-facebook");

server.use(passport.initialize());
server.use(passport.session());

server.use(cors());
server.use(logger("tiny"));
server.use(express.json());
server.use(express.static("public/images"));
server.use(express.urlencoded({ extended: false }));

server.use("/auth", authRoutes);
server.use("/products", productRoutes);
server.use("/upload", uploadFiles);
server.use("/vender/login", authRoutes);
server.use("/vender/register", authRoutes);
server.use('/vender', productVendorRoutes);
server.use('/carts', cartRoutes);
server.use("/charge", chargRoutes);
server.use("/checkout", checkoutRoutes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`DATABASE HAS BEEN SYNCING`.cyan.bold.underline);
  })
  .catch((err) =>
    console.log(`There might be some err : ${err}`.red.bold.bgWhite)
  );

const PORT = process.env.PORT || 7000;

server.listen(PORT, () =>
  console.log(`SERVER IS RUNNING ON ${PORT}`.magenta.bold.bgWhite.underline)
);
