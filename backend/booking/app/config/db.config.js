const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    url:`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@astrex.yug8cxn.mongodb.net/test?retryWrites=true&w=majority`
  };