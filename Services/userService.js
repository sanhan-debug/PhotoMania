import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Photo } from "../Models/photoModel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hassedPas = bcrypt.hashSync(password, 10, (err, next) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });

    const user = await User.create({ username, email, password: hassedPas });
    // console.log(user);
    res.status(201).redirect("/login");
  } catch (error) {
    let errors2 = {};

    if (error.name === "ValidationError") {
      Object.keys(error.errors).forEach((key) => {
        errors2[key] = error.errors[key].message;
      });
    }

    console.log(errors2);

    res
      .json({
        succeded: false,
        errors2,
      })
      .status(404);
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = await createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });

      res.redirect("/users/dashboard");
    } else {
      res.json({ message: "shifre yanlishdir" });
    }
  } else {
    res.status(401).json({
      message: "error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: res.locals._id } });
    res.status(200).render("users", { users, link: "users" });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export const getAUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    const inFollowers = user.followers.some((follower) => {
      return follower.equals(res.locals.user._id);
    });

    const photos = await Photo.find({ user: user._id });
    res
      .status(200)
      .render("user", { user, photos, inFollowers, link: "users" });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export const follow = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { followers: res.locals.user._id },
      },
      { new: true }
    );

    user = await User.findByIdAndUpdate(
      { _id: res.locals.user._id },
      {
        $push: { followings: req.params.id },
      },
      { new: true }
    );

    res.status(200).redirect(`/users/${req.params.id}`);
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export const unfollow = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $pull: { followers: res.locals.user._id },
      },
      { new: true }
    );

    user = await User.findByIdAndUpdate(
      { _id: res.locals.user._id },
      {
        $pull: { followings: req.params.id },
      },
      { new: true }
    );

    res.status(200).redirect(`/users/${req.params.id}`);
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const getDashboardPage = async (req, res) => {
  const photos = await Photo.find({ user: res.locals.user._id });
  const user = await User.findById({ _id: res.locals.user._id }).populate(["followers","followings"])
  res.render("dashboard", { link: "dashboard", photos, user  });
};
