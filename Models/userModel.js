import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username area is required"],
      lowercase: true,
      validate: [validator.isAlphanumeric, "Only alhpanumeric characters"],
    },
    email: {
      type: String,
      required: [true, "Email area is required"],
      unique: true,
      validate: [validator.isEmail, "Valid Email is required "],
    },
    password: {
      type: String,
      required: [true, "Password area is required"],
      minlength: [4, "At least 4 characters"],
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

// userSchema.pre('save',  (next)=> {
//   const user = this;
//   bcrypt.hash(user.password, 10, (err, hash) => {
//     user.password = hash;
//     next();
//   });
// });

export const User = model("User", userSchema);
