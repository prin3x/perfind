const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
  try {
    const {username, password} = req.body;
    const targetUser = await db.User.findOne({where: {username}});

    if (targetUser) {
      res.status(400).send({message: 'This username has been chosen'});
    } else {
      bcryptjs.genSalt(Number(process.env.SALT_ROUND), async (err, salt) => {
        if (err) res.status(400).send({message: 'Sorry salt went wrong'});
        bcryptjs.hash(password, salt, async (err, hashedPw) => {
          if (err)
            res.status(400).send({message: 'Sorry something went wrong here!'});
          await db.User.create({
            ...req.body,
            password: hashedPw,
          });
          res.status(200).send({message: 'hooray!'});
        });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({message: 'Sorry something went wrong'});
  }
};

const userLogin = async (req, res) => {
  try {
    const {username, password} = req.body;

    const targetUser = await db.User.findOne({where: {username}});

    if (!targetUser) {
      res.status(400).send({message: 'Username or password is wrong'});
    } else {
      bcryptjs.compare(password, targetUser.password, async (err, result) => {
        if (err) res.status(400).send({message: 'Sorry something went wrong'});

        const payload = {
          name: targetUser.name,
          id: targetUser.id,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 36000,
        });
        res.status(200).send({token, message: 'login succes!'});
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({message: 'Sorry something went wrong'});
  }
};

module.exports = {
  userRegister,
  userLogin,
};
