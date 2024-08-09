import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hasshedPass = bcrypt.hashSync(password, 10);
    
    if (username && email && password) {
      const user = await User.create({
        username,
        email,
        password: hasshedPass,
      });
      console.log(req.body);
      res.status(201).json({
        message: "Data has been added!",
        succeeded: true,
        user,
      });
    }
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error: error.message || "An error occurred while creating the user",
    });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log(user);

  if (user) {
    const match = bcrypt.compareSync(password, user.password);
    if (match) {
      res.send("gire bilersiz!");
    }
  } else {
    res.status(401).json({
      error: error.message,
    });
  }
};
