import { Schema, model } from "mongoose";
import bcrypt, { hash } from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next(); // password dəyişməyibsə, növbəti middleware-ə keç
    
    console.log("USER PASSWORD : ", user.password);
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err); // əgər xəta varsa, next(err) çağır
    
      user.password = hash;
      console.log("User Password : ", user.password);
      next();
    });
  });

export const User = model("users", userSchema);
