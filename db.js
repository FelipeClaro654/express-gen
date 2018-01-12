const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/test';
mongoose.Promise = global.Promise;
mongoose.connect(dbURI, { useMongoClient: true });

module.exports = { mongoose }