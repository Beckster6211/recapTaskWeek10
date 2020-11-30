const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { saltRounds, jwtSecret } = require('./config');

/* Task 1.1 - Using the bcrypt module, complete the `hashPassword` function below so that it hashes a password 
and returns the hashed password. Use the `saltRounds` variable when hashing the password. */

async function hashPassword(password) {}

/* Task 1.2 - Using the bcrypt module, complete the `authenticatePassword` function below so that it returns true if the given 
password matches a hashed password, and false if it does not. */

async function comparePassword(password, hashed) {}

/* Task 1.3 - Using the jsonwebtoken module, complete the `signToken` function below so that it returns a signed JWT token
containing the data passed. Sign the token with `jwtSecret` variable required at the top of this file. */

function signToken(data) {}

/* Task 1.4 - Using the jsonwebtoken module, complete the `verifyToken` function below so that it returns the verification
object if the token matches the `jwtSecret`, and throws an error if it does not. The token should expire in one hour. */

function verifyToken(token) {}

module.exports = { hashPassword, comparePassword, signToken, verifyToken };
