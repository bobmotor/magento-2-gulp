/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const localConfig = require('./local');

module.exports = {
    out: 'critical.css',
    url: `https://${localConfig.hostname}.loc/`,
    width: 1920,
    height: 250,
    forceExclude: [/\[data-role=main-css-loader]/]
};
