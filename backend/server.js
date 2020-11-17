require('dotenv').config();
require('colors');

const express = require('express');
const cors = require('cors');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const passport = require('passport');

const server = express();

require('./config/passport/passport');
require('./config/passport/passport-facebook');

server.use(passport.initialize());
server.use(passport.session());

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/auth', authRoutes);
server.use('/products', productRoutes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`DABATSE HAS BEEN SYNCING`.cyan.bold.underline);
  })
  .catch(err =>
    console.log(`There might be some err : ${err}`.red.bold.bgWhite)
  );

const PORT = process.env.PORT || 7000;

server.listen(PORT, () =>
  console.log(`SERVER IS RUNNING ON ${PORT}`.magenta.bold.bgWhite.underline)
);
