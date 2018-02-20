'use strict';

var ConfigRepository = require('../repositories/configRepository');
var Config = require('../models/config');

exports.getConfig = function (req, res) {
    var promise = ConfigRepository.getConfig();
    promise.then(function (config) {
        return res.json({success: true, data: config});
    }, function (err) {
        return res.status(500).json({success: false, msg: 'Failed to get configuration', error: err});
    });
};

exports.updateConfig = function (req, res) {

    var promise = ConfigRepository.countRecords();
    promise.then(function (count) {
        if (count !== 0){
            return ConfigRepository.updateConfig(req.body);
        }
        else {
            var newConfig = new Config(req.body);
            return ConfigRepository.addConfig(newConfig);
        }
    }, function (err) {
        return res.status(500).json({success: false, msg: 'Failed to update config', error: err});
    }).then(function(result){
        return res.json({success: true, msg: result});
    }, function(err){});
};

