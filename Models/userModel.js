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

export const User = model("users", userSchema);
