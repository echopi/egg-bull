'use strict';

const queue = require('./lib/bull');

module.exports = app => {
  /* istanbul ignore next*/
  if (app.config.bull.agent) queue(app);
};
