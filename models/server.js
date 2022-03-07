const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const { dbConnection } = require("../database/config");
const userRoutes  = require("../routes/user");
const authRoutes = require("../routes/auth");
const { PORT, NODE_ENV } = require("../config/config");

module.exports = class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.env = NODE_ENV;
    this.paths = {
      user: "/api/users",
      auth: "/api/auth",
    };
    this.Database();
    this.Middlewares();
    this.Routes();
  }
  Middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(morgan("dev"));
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, __dirname, "public/uploads");
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + file.originalname);
      },
    });
    this.app.use(multer({ storage: storage }).array("file"));
  }

  async Database() {
    await dbConnection();
  }

  Routes() {
    this.app.use(`${this.paths.user}`, userRoutes);
    this.app.use(`${this.paths.auth}`, authRoutes);
  }

  Listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
      //console.log(`NODE_ENV = ${this.env}`);
    });
  }
}