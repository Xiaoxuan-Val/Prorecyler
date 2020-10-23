var config = {

  development: {
      //url to be used in link generation
      dbURI: "mongodb+srv://weijiel6:PFENlCghUAOLvAGv@cluster0.3f5lf.mongodb.net/COMP30022?retryWrites=true&w=majority",
      options: {
          useNewUrlParser: true,
          dbName: "COMP30022"
      },

  },
  production: {
      dbURI: "mongodb+srv://weijiel6:PFENlCghUAOLvAGv@cluster0.3f5lf.mongodb.net/COMP30022?retryWrites=true&w=majority",
      options: {
          useNewUrlParser: true,
          dbName: "COMP30022"
      },

  }
};
module.exports = config;