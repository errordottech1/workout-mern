import express from "express";
import {
  createExercise,
  deleteExercise,
  getAllExercises,
  getAnExercise,
  updateExercise,
} from "../controllers/exerciseControllers.js";

const router = express.Router();

router.get("/:id", getAnExercise);

router.get("/", getAllExercises);

router.post("/", createExercise);

router.put("/:id", updateExercise);

router.delete("/:id", deleteExercise);

export default router;
