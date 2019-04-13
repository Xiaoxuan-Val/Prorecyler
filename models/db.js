const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI =
    //"mongodb://xiaoxuan:lixiaoxuan233@cluster0-shard-00-00-k2wti.mongodb.net:27017,cluster0-shard-00-01-k2wti.mongodb.net:27017,cluster0-shard-00-02-k2wti.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
    // "mongodb://xiaoxuan:lixiaoxuan233@cluster0-shard-00-00-k2wti.mongodb.net:27017,cluster0-shard-00-01-k2wti.mongodb.net:27017,cluster0-shard-00-02-k2wti.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
    "mongodb+srv://ChouTatsumi:KeltxajilabB2@cluster0-b5ldm.mongodb.net/test?retryWrites=true"
const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

require('./data.js');
require('./trash.js');