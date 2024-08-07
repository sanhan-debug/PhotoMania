import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
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
