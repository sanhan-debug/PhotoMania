import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    res.status(201).json({
      message: "data has been added!",
      succeded: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (user) {
    const isCorrect = await bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      res.send("gire bilersiz!");
    }
  } else {
    res.status(401).json({
      error: "There is not such user",
    });
  }
};
