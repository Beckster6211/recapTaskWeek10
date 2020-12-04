const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { saltRounds, jwtSecret } = require("./config");

/* Task 1.1 - Using the bcrypt module, complete the `hashPassword` function below so that it hashes a password 
and returns the hashed password. Use the `saltRounds` variable when hashing the password. */

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, saltRounds);
  //console.log({ hash });
  return hash;
}

hashPassword("password");

/* Task 1.2 - Using the bcrypt module, complete the `authenticatePassword` function below so that it returns true if the given 
password matches a hashed password, and false if it does not. */

async function comparePassword(password, hashed) {
  const result = await bcrypt.compare(password, hashed);
  //console.log({ result });
  return result;
}
comparePassword(
  "password",
  "$2b$10$8KawJUgH4IfCjkjVw2h6z.aPp0u7qmmRjjUbcEIKE7F57SL0Izdxa"
);

/* Task 1.3 - Using the jsonwebtoken module, complete the `signToken` function below so that it returns a signed JWT token
containing the data passed. Sign the token with `jwtSecret` variable required at the top of this file. */

function signToken(data) {
  const token = jwt.sign(data, jwtSecret, { expiresIn: "1h" });
  //console.log({ token });
  return token;
}

signToken({ name: "Becky", id: "0000" });

/* Task 1.4 - Using the jsonwebtoken module, complete the `verifyToken` function below so that it returns the verification
object if the token matches the `jwtSecret`, and throws an error if it does not. The token should expire in one hour. */

function verifyToken(token) {
  //   jwt.verify(token, jwtSecret, function (error, decoded) {
  //     console.log({ decoded });
  //     return decoded;
  //   });
  // if (jwt.verify(token, jwtSecret)) {
  //   return decoded;
  // } else {
  //   throw error;
  // }
  return jwt.verify(
    token,
    jwtSecret,
    { exxpiresIn: "1h" },
    function (error, decoded) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log(decoded);
        return decoded;
      }
    }
  );
}
verifyToken();

module.exports = { hashPassword, comparePassword, signToken, verifyToken };
