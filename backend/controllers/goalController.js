const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler (req,res) => {
    res.status(200).json({message : 'Get Goals'})
};

const setGoal = asyncHandler (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: "Set goal" })
};

const updateGoal = asyncHandler (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` });
};

const deleteGoal = asyncHandler (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
};

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}