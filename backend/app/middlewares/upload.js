const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/uploads/", // Save to 'uploads/' folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});
const upload = multer({ storage: storage });

module.exports = upload;

