"use strict";
const randomString = require("randomstring");
const moment = require("moment");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();

    function RandomMinMax(min, max) {
      return Math.round(Math.floor(Math.random() * (max - min)) + min);
    }

    const generateFlightsForDay = (
      departureAirportId,
      arrivalAirportId,
      duration,
      flightTypeId,
      date
    ) => {
      let flights = [];
      const airlineIds = [1, 2, 3]; // Assuming you have three airline IDs

      for (let i = 0; i < 10; i++) {
        const randomTime = moment()
          .hour(RandomMinMax(1, 12))
          .minute(RandomMinMax(0, 59));
        const dur = moment.utc(duration, "hh:mm").format("hh:mm");

        const randomAirlineId =
          airlineIds[Math.floor(Math.random() * airlineIds.length)];

        // Create outbound flight
        const outboundFlight = {
          flightCode: `GA-${randomString.generate({
            length: 3,
            charset: "numeric",
          })}`,
          airlineId: randomAirlineId,
          airplaneId: 1,
          departureAirportId,
          arrivalAirportId,
          departureDate: date.format("YYYY-MM-DD"),
          duration: dur,
          arrivalDate: date.format("YYYY-MM-DD"),
          departureTime: moment(randomTime).format("hh:mm"),
          arrivalTime: moment(randomTime)
            .add(moment.duration(duration))
            .format("hh:mm"),
          flightTypeId,
          flightClassId: 1,
          price: RandomMinMax(5, 15) * 100000,
          baggage: RandomMinMax(15, 25),
          isAvailable: true,
          createdAt: timestamp,
          updatedAt: timestamp,
        };

        // Create return flight for outbound flight
        const returnFlight = {
          ...outboundFlight,
          flightCode: `GA-${randomString.generate({
            length: 3,
            charset: "numeric",
          })}`,
          departureAirportId: arrivalAirportId,
          arrivalAirportId: departureAirportId,
          departureDate: date.add(1, "days").format("YYYY-MM-DD"), // Assuming a one-day gap for the return
          arrivalDate: date.add(1, "days").format("YYYY-MM-DD"),
        };

        flights.push(outboundFlight, returnFlight);
      }
      return flights;
    };

    const airports = [5945, 5793, 5798, 5780];

    let data = [];
    for (let i = 0; i < 7; i++) {
      // 7 days in a week
      const currentDate = moment().add(i, "days");
      airports.forEach((departureAirportId) => {
        airports.forEach((arrivalAirportId) => {
          if (departureAirportId !== arrivalAirportId) {
            data = [
              ...data,
              ...generateFlightsForDay(
                departureAirportId,
                arrivalAirportId,
                "01:30",
                1,
                currentDate
              ),
            ];
          }
        });
      });
    }

    await queryInterface.bulkInsert("Flights", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Flights", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
