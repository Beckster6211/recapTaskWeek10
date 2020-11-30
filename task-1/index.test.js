const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { saltRounds, jwtSecret } = require("./config");

const { hashPassword, comparePassword, signToken, verifyToken } = require(".");
describe("Task 1", () => {
  test("hashPassword should hash password correctly", async () => {
    const password = "Password1!";
    const hashed = await hashPassword(password);
    const match = await bcrypt.compare(password, hashed);
    expect(hashed).not.toBe(password);
    expect(match).toBe(true);
  });

  test("comparePassword should compare password correctly", async () => {
    const password = "Password1!";
    const hashed = await bcrypt.hash(password, saltRounds);
    const match = await comparePassword(password, hashed);
    expect(match).toBe(true);
  });

  test("sign token should sign token with secret", async () => {
    const token = signToken({ test: true });
    const { test } = jwt.verify(token, jwtSecret);
    expect(test).toBe(true);
  });
  test("signed token should expire in 1 hour", async () => {
    const token = signToken({ test: true });
    const { iat, exp } = jwt.verify(token, jwtSecret);
    const timeDiff = new Date(new Date(exp) - new Date(iat));
    expect(timeDiff.getHours()).toBe(1);
    expect(timeDiff.getMinutes()).toBe(0);
  });

  test("should return decoded token", async () => {
    const token = jwt.sign({ test: true }, jwtSecret, { expiresIn: "1h" });
    const { test } = verifyToken(token);
    expect(test).toBe(true);
  });
  test("should throw error if token not valid", async () => {
    const token = jwt.sign({ test: true }, "NOT THE RIGHT SECRET", {
      expiresIn: "1h",
    });
    expect(() => verifyToken(token)).toThrow();
  });
});
