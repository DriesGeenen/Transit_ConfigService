'use strict';

const ConfigRepository = require('../repositories/configRepository');
const Config = require('../models/config');

exports.getConfig = function (req, res) {
    const promise = ConfigRepository.getConfig();
    promise.then(function (config) {
        return res.json({success: true, data: config});
    }, function (err) {
        return res.status(500).json({success: false, msg: 'Failed to get configuration', error: err});
    });
};

exports.updateConfig = function (req, res) {

    const promise = ConfigRepository.countRecords();
    promise.then(function (count) {
        if (count !== 0){
            return ConfigRepository.updateConfig(req.body);
        }
        else {
            const newConfig = new Config(req.body);
            return ConfigRepository.addConfig(newConfig);
        }
    }, function (err) {
        return res.status(500).json({success: false, msg: 'Failed to update config', error: err});
    }).then(function(result){
        return res.json({success: true, msg: result});
    }, function(err){});
};

