const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

const keys = require('../config/keys');

cloudinary.config({
  cloud_name: keys.cloudinaryCloudName,
  api_key: keys.cloudinaryAPIKey,
  api_secret: keys.cloudinarySecretKey
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'devhub/users',
    format: async () => 'jpeg',
    public_id: (req, file) => {
      const name = file.originalname
          .toLowerCase()
          .split(/[\s,.]+/)
          .slice(0, -1)
          .join('-');
      return `${name}-${Date.now}`;
    }
  }
});

module.exports = multer({ storage }).single('image');
