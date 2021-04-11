'use strict';

const events = require('./events');
const faker = require('faker');
const uuid = require('uuid');

setInterval(() => {

    const store = {
      store: faker.company.companyName(),
      orderID: faker.random.uuid(),
      customer: faker.name.findName(),
      address: `${faker.address.city()}, ${faker.address.stateAbbr()} , ${faker.address.streetAddress()}`,
    };

    events.emit('pickup', store);
  }, 6000);

  setTimeout(() => {
    events.on('in-transit', (data) => {
      console.log('In-Transit', data);
    });
  }, 3000);

  events.on('delivered', () => {
    console.log('Thank You');

  });
