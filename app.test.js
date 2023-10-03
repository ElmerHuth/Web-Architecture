const request = require('supertest');
const app = require('./app');
const { type } = require('os');

describe('sites running', () => {
    test('I am alive and responding', done => {
        request(app)
        .get('/')
        .expect(200)
        .end(done)
    });
    
    test('GET /about', done => {
        request(app)
        .get('/about')
        .expect(200)
        .end(done)
    });

    test('GET /users', done => {
        request(app)
        .get('/users')
        .expect(200)
        .end(done)
    })

    test('GET jibberish', done => {
        request(app)
        .get('/asjdgajdsg')
        .expect(404)
        .end(done)
    });
})

describe('User Tests', () => {
    test('GET /users gives a list of users', done => {
        request(app)
        .get('/users')
        .expect(200, Number)
        .end(done)
    });
    test('GET /users/10 gives user with id 10', done => {
        request(app)
        .get('/users/10')
        // FEL ATT SKRIVA JSON
        .expect(200, JSON)
        .end(done)
    });
    test('DELETE /user/10 removes the user with id 10', done => {
        request(app)
        .delete('/users/10')
        .expect(410)
        .end(done)
    });
    test('POST /user creates a new user', done => {
        request(app)
        .post('/users')
        .expect(201)
        .end(done)
    });
})