const mongoose = require('mongoose');
const Contact = require('./contact');
const Autographs = require('./autographs');

const configSchema = mongoose.Schema({
    mainTransporter: Contact,
    autographs: Autographs
});

const Config = module.exports = mongoose.model('Config', configSchema);