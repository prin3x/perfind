require('dotenv').config();
require('colors');

const express = require('express');
const cors = require('cors');
const db = require('./models');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: false}));

db.sequelize
  .sync()
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
