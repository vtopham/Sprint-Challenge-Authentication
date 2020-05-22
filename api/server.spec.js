const request = require('supertest');
const db = require('../database/dbConfig');
const server = require('./server.js')
const AuthRouter = require('../auth/auth-router');
const JokesRouter = require('../jokes/jokes-router');

describe('tests each in the auth router', () => {
    beforeEach( async() => {
        await db.seed.run();
    });

    it('has process.env DB_ENV as "testing"', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    //for the auth-router /api/auth
    server.use('/api/auth', AuthRouter)
    
    // post('/register'
    describe('test registration', () => {
        it('#1 gets a response when a username and password are added', () => {
            return request(server).post('/api/auth/register')
                .send({username: "test", password: "test"})
                .expect(201)
                .then(res => {
                    expect(res.body.user).toBeDefined()
                })
        })
        
        it('#2 gets a 400 when a username isnt present', () => {
            return request(server).post('/api/auth/register')
                .send({password: "asdfasdf"})
                .then(res => {
                    // console.log(res.statusCode)
                    expect(res.statusCode).toBe(400)
                })


        })
    })

    // post('/login'    
    


})

describe('tests the joke router endpoint', () => {
    //for the auth-router /api/jokes
    server.use('/api/jokes', JokesRouter);

    //get('/',
})






