const dbConfig = require('../configs/db.config');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
// db.url = "mongodb://127.0.0.1:27017/collect_product"
db.url = process.env.DATABASE_URL;
db.products = require('./product.model')(mongoose);

module.exports = db;