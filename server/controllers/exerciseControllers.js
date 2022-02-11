export const getAnExercise = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(`get ${id} exercise`);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const getAllExercises = (req, res) => {
  try {
    res.status(200).json(`get all exercises`);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
  res.status(200).json({ message: "get all of the exercises" });
};

export const createExercise = (req, res) => {
  const { title } = req.body;
  try {
    title
      ? res.status(200).json(`create ${title} exercise`)
      : res.status(400).json({ message: "your exercise needs a title" });
  } catch (error) {
    res.status(500);
    throw new Error(`your exercise needs a title`);
  }
};

export const updateExercise = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(`update ${id} exercise`);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const deleteExercise = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(`delete ${id} exercise`);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};
