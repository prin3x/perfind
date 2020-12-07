const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadToCloudinary = async (path, filename) =>
  await cloudinary.uploader.upload(
    path,
    {
      public_id: `PerfindStorage/${filename}`,
      use_filename: true,
    },
    function (err, image) {
      if (err) return err;
      console.log("file uploaded to Cloudinary");
      fs.unlinkSync(path);
      return image;
    }
  );

module.exports = uploadToCloudinary;
