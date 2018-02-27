'use strict';

module.exports = function (app) {
    const ConfigController = require('../controllers/configController');
    const AuthHelper = require('../helpers/authHelper');

    app.route('/config')
        .get(ConfigController.getConfig)
        .put(ConfigController.updateConfig);
};
