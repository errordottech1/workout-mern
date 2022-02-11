export const getAnExercise = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `get an exercise with id of ${id}` });
};

export const getAllExercises = (req, res) => {
  res.status(200).json({ message: "get all of the exercises" });
};

export const createExercise = (req, res) => {
  res.status(200).json({ message: "create an exercise" });
};

export const updateExercise = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update an exercise with id of ${id}` });
};

export const deleteExercise = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete an exercise with id of ${id}` });
};
