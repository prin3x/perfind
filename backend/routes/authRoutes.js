const route = require("express").Router();
const passport = require("passport");
const controller = require("../controllers/authController");

// Uploadfiles
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const uploadFile = upload.single("file");

passport.serializeUser(function (user, done) {
  console.log("Hello this is serialize");
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

route.post("/upload", uploadFile, function (req, res) {
  console.log("storage location is ", req.hostname + "/" + req.file.path);
  return res.send(req.file);
});

route.post("/register", controller.userRegister);
route.post("/login", controller.userLogin);
route.post("/vender/register", controller.venderRegister);
route.post("/vender/login", controller.venderLogin);

route.get("/facebook", passport.authenticate("facebookToken"));
route.get(
  "/facebook/callback",
  passport.authenticate("facebookToken"),
  (req, res) => {
    res.status(200).send({ message: "login successfully" });
  }
);

module.exports = route;
