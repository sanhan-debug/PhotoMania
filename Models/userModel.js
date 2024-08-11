import { Schema, model } from "mongoose";
import validator from 'validator'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required:[true,"Username area is required"],
      lowercase : true,
      validate:[validator.isAlphanumeric,"Only alhpanumeric characters"]
    },
    email: {
      type: String,
      required:[true,"Email area is required"],
      unique:true,
      validate:[validator.isEmail,"Valid Email is required "]
    },
    password: {
      type:String,
      required:[true,"Password area is required"],
      minLength:[4,"At least 4 characters"]
    },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

export const User = model("users", userSchema);
