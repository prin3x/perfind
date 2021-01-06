const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads");
    // อัพโหลดลงเครื่องก่อน แล้วจึงอัพขึ้นcloudinary จากนั้นจึงจะลบที่อยู่ในเครื่อง
  },
  filename: (req, file, cb) => {
    console.log(file);
    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, `userferfind-${Date.now()}.${file.mimetype.split('/')[1]}`);
  },
});


const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
