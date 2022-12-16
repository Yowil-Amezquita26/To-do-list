require("dotenv").config();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function deleteImage(req, res) {
  const public_id = req.params.public_id;
  const id = req.params.id;

  try {
    await cloudinary.uploader.destroy(public_id);
    res.json({messaje: 'Image Deleted'})
  } catch (error) {
    res.json({messaje:"Somenthing Happend"})
  }
}
module.exports = deleteImage;
