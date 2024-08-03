import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";

export let user;

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
  try {
    const { username, password } = req.body;

    const user = User.findOne({ username });

    let same = false;
    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      res.status(401).json({
        succeded: false,
        error:"There is not such user",
      });
    }
    if(same){
        res.status(200).send("You are loggined in")
    }else{
        res.status(500).json({
            succeded: false,
            error:"password is not true",
          }); 
    }


  } catch (error) {
    res.status(500).json({
      succeded: false,
      error:"invalid user",
    });
  }
};
