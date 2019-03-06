const request = require('supertest');
const app = require('../index')

describe('GET /api/products', () => {
    test('responds with json and 200 status', function (done) {
        request(app)
            .get('/api/products/')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
})
describe('PUT /api/products', () => {
    test('responds with json and 200 status', function (done) {
        request(app)
            .put('/api/products/1')
            .send({
                id: 1,
                shop_quantity: 11,
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
})