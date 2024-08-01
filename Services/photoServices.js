import { Photo } from "../Models/photoModel.js";

export let photo;
const createPhoto = async (req, res) => {
  try {
    photo = await Photo.create(req.body);
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

const getAllPhoto =  (req, res) => {
  try {
    const photos =  Photo.find({});
    res
      .status(200)
      .render("photos", {photos})
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export { createPhoto, getAllPhoto };
