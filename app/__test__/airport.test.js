const request = require('supertest');
const app = require('../routes/router');

describe('get airport data', () => {
  it('should response with status code 201', async () => {
    return await request(app)
      .get('/v1/airport')
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('airport');
      });
  });
});
