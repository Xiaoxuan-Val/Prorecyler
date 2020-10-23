var config = {

    development: {
        //url to be used in link generation
        dbURI: "mongodb+srv://ChouTatsumi:KeltxajilabB2@cluster0-b5ldm.mongodb.net/test?retryWrites=true",
        options: {
            useNewUrlParser: true,
            dbName: "INFO30005-F4"
        },

    },
    production: {
        dbURI: "mongodb+srv://ChouTatsumi:KeltxajilabB2@cluster0-b5ldm.mongodb.net/test?retryWrites=true",
        options: {
            useNewUrlParser: true,
            dbName: "INFO30005-F4"
        },

    }
};
module.exports = config;