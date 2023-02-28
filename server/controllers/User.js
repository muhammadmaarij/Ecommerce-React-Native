import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "Email already in used" });
    }
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);
    const result = await User.create({
      email,
      password: hasedPassword,
      name,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      process.env.SECRET
    );
    res.status(200).json({ token });
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.status(404).json({ message: "Email doesn't exists" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        email: oldUser.email,
        id: oldUser._id,
      },
      process.env.SECRET
    );
    res.status(200).json({ token });
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};
