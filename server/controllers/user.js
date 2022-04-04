import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExistingUser = await User.findOne({ email });
    if (!isExistingUser)
      return res.status(404).json({ message: "User not found" });
    const hashedPassword = await bcrypt.compare(
      password,
      isExistingUser?.password
    );
    if (!hashedPassword)
      return res.status(404).json({ message: "Wrong Password" });

    const token = jwt.sign(
      { email: isExistingUser.email, id: isExistingUser._id },
      "habit",
      { expiresIn: "1hr" }
    );

    res.status(200).json({ result: isExistingUser, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "habit", {
      expiresIn: "1hr",
    });

    res.status(200).json({ result, token });
  } catch (e) {
    console.log(e);
  }
};
