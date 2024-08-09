import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hassedPas = await bcrypt.hash(password, 10,(err,next)=>{
    if(err){
      console.log(err)
    }else{
      next()
    }
  });

  if (username && email && password) {
    const user = await User.create({ username, email, password: hassedPas });
    res.status(404).json({
      message:"data has been added",
      user
    })
  }else{
    res.send("error: datalarin hamisini yazin!")
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  console.log(req.body);

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.send("gire bilersiz!");
    }
  } else {
    res.status(401).json({
      message: "error",
    });
  }
};
