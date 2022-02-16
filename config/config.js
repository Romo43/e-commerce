require("dotenv").config();

module.exports = {
    PORT : process.env.PORT,

    NODE_ENV : process.env.NODE_ENV,

    SECRET : process.env.SECRET,

    MONGO_USER: process.env.MONGO_USER,
    MONGO_PW: process.env.MONGO_PW,
    MONGO_HOST: process.env.MONGO_HOST,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET_ID: process.env.GOOGLE_SECRET_ID,

    CLOUDINARY_URL: process.env.CLOUDINARY_URL
};