const getGoals = (req,res) => {
    res.status(200).json({message : 'Get Goals'})
};

const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goals" })
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` })
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` })
};

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}