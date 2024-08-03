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
    versionKey:false
  }
);

userSchema.pre("save", function (next) {
    const user = this;    
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err); // əgər xəta varsa, next(err) çağır
    
      user.password = hash;
      next();
    });
  });

export const User = model("users", userSchema);
