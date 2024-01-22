const request = require("supertest");
const db = require("../db");
const bcrypt = require("bcrypt");
const createToken = require("../helpers/createToken");
const { requireLogin, requireAdmin, authUser } = require('../middleware/auth');
const jwt = require('jsonwebtoken');


const { SECRET_KEY } = require("../config");

// tokens for our sample users
const tokens = {};


/** before each test, insert u1, u2, and u3  [u3 is admin] */

beforeEach(async function() {
  async function _pwd(password) {
    return await bcrypt.hash(password, 1);
  }

  let sampleUsers = [
    ["u1", "fn1", "ln1", "email1", "phone1", await _pwd("pwd1"), false],
    ["u2", "fn2", "ln2", "email2", "phone2", await _pwd("pwd2"), false],
    ["u3", "fn3", "ln3", "email3", "phone3", await _pwd("pwd3"), true]
  ];

  for (let user of sampleUsers) {
    const existingUser = await db.query('SELECT * FROM users WHERE username = $1', [user[0]]);

    if(existingUser.rows.length === 0) {
        await db.query(
            `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            user
          );
          tokens[user[0]] = createToken(user[0], user[6]);
    }
    
  }
});

describe('requireLogin Middleware', function () {
    test('should allow access if user is logged in', async function() {
        const req = { curr_username: 'u1'};
        const next = jest.fn();

        requireLogin(req, {}, next);

        expect(next).toHaveBeenCalled();
    });

    test('should return 401 Unauthorized if user is not logged in', async function() {
        const req = {};
        const res = {};
        const next= jest.fn();

        requireLogin(req,res,next);
        expect(next).toHaveBeenCalledWith({
            status: 401,
            message: 'Unauthorized'
        });
    });
});

describe('requireAdmin Middleware', function() {
    test('should allow acess if user is logged in and is an admin', async function() {
        const req = { curr_admin: true };
        const next = jest.fn();

        requireAdmin(req,{},next);

        expect(next).toHaveBeenCalled();

    });

    test('should return 401 Unauthorized if not an admin', async function() {
        const req = { curr_admin: false };
        const next = jest.fn();

        requireLogin(req,{},next);
        expect(next).toHaveBeenCalledWith({
            status: 401,
            message: 'Unauthorized'
        });
    });
});

describe('authUser Middleware', function() {
    test('should set curr_username and curr_admin if valid token provided', async function() {
        const token = jwt.sign({ username: 'u3', admin: true }, 'SECRET_KEY');
        const req = { body: { _token: token }, query: {} };
        const next = jest.fn();

        authUser(req,{}, next);
        expect(req.curr_username).toBe('u3');
        expect(req.curr_admin).toBe(true);
        expect(next).toHaveBeenCalled();

    })

    test('should not set curr_username and curr_admin if no token provided', async function() {
        const req = { body: {}, query: {} };
        const next = jest.fn();
    
        authUser(req, {}, next);
    
        expect(req.curr_username).toBeUndefined();
        expect(req.curr_admin).toBeUndefined();
        expect(next).toHaveBeenCalled();
      });
    
      test('should return 401 Unauthorized if invalid token provided', async function() {
        const req = { body: { _token: 'invalid_token' }};
        const res = {};
        const next = jest.fn();

        try{
            await authUser(req,res,next);
            fail('Expected an error to be thrown');
        } catch (err) {
            expect(err.status).toBe(401);
            expect(err.message).toBe('Unathorized');
        }
    
      });
    });