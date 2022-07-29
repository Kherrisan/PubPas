let request = require('supertest');
const app = require('./app');

test('PubPas is running', async () => {
  const res = await request(app).get('/info');
  expect(res.text).toBe('PubPas is running.');
});