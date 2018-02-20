'use strict';

var mongoose = require('mongoose');
var Config = mongoose.model('Config');

exports.getConfig = function () {
    return Config.findOne({});
};

exports.addConfig = function (newConfig) {
    return newConfig.save();
};

exports.updateConfig = function (config) {
    return Config.update({}, config);
};

exports.countRecords = function () {
    return Config.count({});
}
