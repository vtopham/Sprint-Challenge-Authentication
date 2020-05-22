const requres = require('supertest');
const db = require('../database/dbConfig');
const server = require('./server.js')
const AuthRouter = require('../auth/auth-router');
const JokesRouter = require('../jokes/jokes-router');
describe('tests each in the auth router', () => {
    beforeEach( async() => {
        db.migrate.latest();
    });

    it('has process.env DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    //for the auth-router /api/auth
    server.use('/api/auth', AuthRouter)
    
    // post('/register'
    describe('test test registration', () => {
        // it('gets a response when a username and password are added', () => {

        // })
    })

    // post('/login'    
    


})

describe('tests the joke router endpoint', () => {
    //for the auth-router /api/jokes
    server.use('/api/jokes', JokesRouter);

    //get('/',
})






