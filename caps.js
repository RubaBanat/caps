'use strict';

const events = require('./events.js');
const driver = require('./driver.js');
const vendor = require('./vendor.js');

events.on('pickup', (payload) => {
  console.log('New order placed ', payload);
});