require("dotenv").config();

const {
  CLOUDINARY_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET_ID,
  MONGO_HOST,
  MONGO_PW,
  MONGO_USER,
  NODE_ENV,
  PORT,
  SECRET,
} = process.env;

module.exports = {
  CLOUDINARY_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET_ID,
  MONGO_HOST,
  MONGO_PW,
  MONGO_USER,
  NODE_ENV,
  PORT,
  SECRET,
};
