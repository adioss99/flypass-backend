const request = require('supertest');
const app = require('../routes/router');

describe('get airplane data', () => {
  it('should response with status code 200', async () => {
    this.timeout(5000);
    await request(app)
      .get('/v1/airplanes')
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('airplane');
      })
  });

  it('should response with status code 200 get by id', async () => {
    this.timeout(5000);
    await request(app)
      .get('/v1/airplanes/'+ 2)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('airplane');
      })
  });
});
