import pkg from "jsonwebtoken";

const { sign } = pkg;

export const createToken = (user) =>
  sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
