import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";

export let user;
// export let pass;

export const createUser = async (req, res) => {
  try {
    user = await User.create(req.body);
    res.status(201).json({
      message: "data has been added!",
      succeded: true,
      photo,
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
  const user = await User.findOne({ username :username });

  if (user) {
    let isCorrect = await bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      res.send("gire bilersiz!");
    }
  } else {
    res.status(401).json({
      error: "There is not such user",
    });
  }
};
