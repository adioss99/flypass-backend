const randomString = require('randomstring')
const momentRandom = require('moment-random')
const moment = require('moment')

const timestamp = new Date()
function RandomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
const generateFlights = (departureAirportId, arrivalAirportId, duration, flightTypeId) => {
  const randomDate = moment(momentRandom('20230107', '20221207')).format('YYYY-MM-DD')
  const randomTime = moment().hour((RandomMinMax(1, 12)), 'hh:mm:ssss').format('hh:mm:ssss')
  const dur = moment.utc(duration, 'hh:mm:ssss').format('hh:mm:ssss')
  const data = {
    flightCode: `GA-${randomString.generate({ length: 3, charset: 'numeric' })}`,
    airlineId: 1,
    airplaneId: 1,
    departureAirportId,
    arrivalAirportId,
    departureDate: randomDate,
    duration: dur,
    arrivalDate: randomDate,
    departureTime: randomTime,
    arrivalTime: moment(randomTime).add(duration, 'hours').format('hh:mm:ssss'),
    flightTypeId,
    price: RandomMinMax(5, 15) * 100000,
    baggage: RandomMinMax(15, 25),
    isAvailable: true,
    createdAt: timestamp,
    updatedAt: timestamp,
  }
  return data
}

console.log(generateFlights(5945, 5793, '01:30', 1))
