import argon2d from "argon2";

import { createToken } from "../utils/auth.js";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    res.status(400).json({
      status: "error",
      msg: "Duplicated username",
    });
  }

  const hashedPassword = await argon2d.hash(password);

  const user = await User.create({ username, password: hashedPassword });

  await user.save();
  res.status(201).json(user);
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username }).select("+password");

  if (!existingUser) {
    res.status(400).json({
      status: "error",
      msg: "User not found",
    });
  } else {
    const isPasswordValid = await argon2d.verify(
      existingUser.password,
      password
    );

    if (!isPasswordValid) {
      res.status(400).json({
        message: "Incorrect password",
      });
    }

    res.cookie("Authorization", createToken(existingUser), {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Logged in successfully",
      user: existingUser,
      accessToken: createToken(existingUser),
    });
  }
};
