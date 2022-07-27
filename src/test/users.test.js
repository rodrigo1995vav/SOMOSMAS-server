const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const path = require('path');
const { User } = require('../models');
require('dotenv').config();

const login = () => {
    const payload = {
        dataValues: {
            roleId: 1,
            email: 'test@test.com'
        }
    }

    const token = jwt.sign(payload, process.env.SECRET_JWT_SEED);
    return token
}

describe('GET /users testing', () => {
    it('returns a paginated list of users', async () => {
        const token = login();
        const resp = await request(app)
            .get('/users?page=1')
            .set('Authorization', 'bearer ' + token)
            .expect(200)

        expect(resp.body.users).not.toBeUndefined();
    })
    it('can only be accessed if the user is logged as an admin', async () => {
        const resp = await request(app)
            .get('/users?page=1')
            .expect(401)
    })
})

describe('PUT /users testing', () => {

})

describe('DELETE /users testing', () => {

})