import mongoose from "mongoose";
import Exercise from "../model/exerciseModel.js";

export const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json({ message: "Exercises fetched!", exercises });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
  res.status(200).json({ message: "get all of the exercises" });
};

export const getAnExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `no exercise with id of ${id}` });
  }
  try {
    const exercise = await Exercise.findById(id);
    res.status(200).json({ message: `exercise found`, exercise });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const createExercise = async (req, res) => {
  const fields = req.body;
  if (!fields.title)
    return res.status(400).json({ message: "title is required" });
  const newExercise = new Exercise({
    ...fields,
    createdAt: new Date().toISOString(),
  });
  try {
    await newExercise.save();
    res.status(200).json(`${fields.title} exercise created`);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const updateExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `no exercise with id of ${id}` });
  }
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: `${id} exercise updated`, updatedExercise });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const deleteExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `no exercise with id of ${id}` });
  }
  try {
    await Exercise.findByIdAndRemove(id);

    res.status(200).json({ message: `${id} exercise delete` });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};
