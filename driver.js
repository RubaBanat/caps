'use strict';

const events = require('./events');

let allData;
setTimeout(() => {

  events.on('pickup', (data) => {
    allData = data;
    console.log(`DRIVER: picked up the order : ${data.orderID}`);
    events.emit('in-transit', data);


    setTimeout(() => {
      console.log('delivered');
      events.emit('delivered', allData);
    },3000);
  });

}, 1000);