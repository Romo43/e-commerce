const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PW,
  MONGO_HOST,
  NODE_ENV,
} = require("../config/config");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const [MONGO_LOCAL_HOST, MONGO_CLOUD_HOST] = [
  `mongodb://127.0.0.1:27017/${MONGO_HOST}`,
  `mongodb+srv://${MONGO_USER}:${MONGO_PW}@cluster0.meoke.mongodb.net/${MONGO_HOST}?retryWrites=true`,
];
const dbURI = NODE_ENV === "production" ? MONGO_CLOUD_HOST : MONGO_LOCAL_HOST;

const dbConnection = async () => {
  await mongoose
    .connect(dbURI, options)
    .then(() => {
      console.log(`Connected to ${NODE_ENV} database`);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  dbConnection,
};
