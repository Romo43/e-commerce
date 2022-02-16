const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const config = require('../config/config');

class Server {
    constructor() {
        this.app = express();
        this.port = config.PORT;
        this.env = config.NODE_ENV;
        this.paths = {
            user: "/api/users"
        };
        this.Database();
        this.Middlewares();
        this.Routes();
    }
    Middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(__dirname + '/public'));
        this.app.use(cors());
        this.app.use(morgan('dev'));
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, __dirname, 'public/uploads');
            },
            filename: function (req, file, cb){
                cb(null, file.fieldname + '-' + file.originalname);
            }
        });
        this.app.use(multer( { storage: storage } ).array('file'));
    }

    async Database() {
        await dbConnection();
    }

    Routes() {
        this.app.use(`${this.paths.user}`, require('../routes/users.routes'));
    }

    Listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
            //console.log(`NODE_ENV = ${this.env}`);
        });
    }
}

module.exports = Server;