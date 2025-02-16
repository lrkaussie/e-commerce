import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
  it('should return API Gateway is running', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('API Gateway is running');
  });
}); 