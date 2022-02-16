let mongoose = require('mongoose');
const config = require('../config/config');

let username = config.MONGO_USER
let password = config.MONGO_PW
let host     = config.MONGO_HOST
let env      = config.NODE_ENV;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const dbConnection = async () => {
    try {
        if(env === 'production') {
            await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.meoke.mongodb.net/${host}?retryWrites=true`);
            console.log('Connected to production database');
        } else {
            await mongoose.connect(`mongodb://127.0.0.1:27017/${host}`, options);
            console.log('Connected to development database');
        }
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = { 
    dbConnection
};

// mongoose.Promise = global.Promise;
// mongoose.set('useNewUrlParser', true);

// if (env === 'production') {
//     mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.meoke.mongodb.net/${host}?retryWrites=true`)
// } else {
//     mongoose.connect(`mongodb://127.0.0.1:27017/${host}`), {
//         useMongoClient: true,
//     };
// }

// // Signal connection
// mongoose.connection.once('open', function () {
//     console.log('Connection has been made');
// }).on('error', function (error) {
//     console.log('Connect error', error);
// }).on('disconnected', function () {
//     console.log('Connection disconnected');
// })

// module.exports = mongoose;