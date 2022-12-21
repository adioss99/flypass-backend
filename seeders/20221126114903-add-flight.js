'use strict';
const randomString = require('randomstring')
const momentRandom = require('moment-random')
const moment = require('moment')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    function RandomMinMax(min,max){
      return Math.round(Math.floor(Math.random() * (max - min)) + min);
     
     }
     const generateFlights = (departureAirportId, arrivalAirportId, duration, flightTypeId) => {
      const randomDate = moment(momentRandom('20230107', '20221207')).format('YYYY-MM-DD')
      const randomTime = moment().hour((RandomMinMax(1, 12)))
      const dur = moment.utc(duration, 'hh:mm').format('hh:mm')
      const data = {
        flightCode: `GA-${randomString.generate({ length: 3, charset: 'numeric' })}`,
        airlineId: 1,
        airplaneId: 1,
        departureAirportId,
        arrivalAirportId,
        departureDate: randomDate,
        duration: dur,
        arrivalDate: randomDate,
        departureTime: moment(randomTime).format('hh:mm'),
        arrivalTime: moment(randomTime).add(duration, 'hours').format('hh:mm'),
        flightTypeId,
        flightClassId: 1,
        price: RandomMinMax(5, 15) * 100000,
        baggage: RandomMinMax(15, 25),
        isAvailable: true,
        createdAt: timestamp,
        updatedAt: timestamp,
      }
      return data
    }
    let data = []
    for (let i = 0; i < 10; i++) {
      data.push(generateFlights(5945, 5793, '01:30', 1))
      data.push(generateFlights(5793, 5945, '01:45', 1))
      data.push(generateFlights(5945, 5798, '01:15', 1))
      data.push(generateFlights(5798, 5945, '01:15', 1))
      data.push(generateFlights(5945, 5780, '01:30', 1))
      data.push(generateFlights(5780, 5945, '01:30', 1))
    }

    await queryInterface.bulkInsert('Flights', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
