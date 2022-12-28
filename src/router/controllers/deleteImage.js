require("dotenv").config();
const cloudinary = require("cloudinary");
const User = require("../../models/userModel");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function deleteImage(req, res) {
  const public_id = req.params.public_id;
  const image_id = req.params.image_id;

  try {
    await cloudinary.uploader.destroy(public_id);
    res.json({messaje: 'Image Deleted'})
  } catch (error) {
    res.json({messaje:"Somenthing Happend",error})

  }
  try {
    const ticketDB = await User.findOneAndUpdate(
      { "tickets.images._id": image_id},
      {
        $pull:{"tickets.$.images":{_id:image_id}}
      }
    );
    res.json({ messaje: "Ticket Deleted", ticketDB });
  } catch (error) {
    res.json({ menssaje: `${error}` });
  }
}
module.exports = deleteImage;
