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

const getAllPhoto = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).render("photos", { photos, link: "photos" });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};


const getAPhoto = async (req, res) => {
  try {
    const photo = await Photo.findById({_id : req.params.id});
    res.status(200).render("photo", { photo, link: "photos" });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};


export { createPhoto, getAllPhoto, getAPhoto };
