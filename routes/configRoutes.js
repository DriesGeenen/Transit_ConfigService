'use strict';

module.exports = function (app) {
    var ConfigController = require('../controllers/configController');
    var AuthHelper = require('../helpers/authHelper');

    app.route('/config')
        .get(AuthHelper.adminRequired, ConfigController.getConfig)
        .put(AuthHelper.adminRequired, ConfigController.updateConfig);
};
