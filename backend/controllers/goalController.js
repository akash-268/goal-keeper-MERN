const asyncHandler = require('express-async-handler')
const { findById } = require('../model/goalModel')

const Goal = require('../model/goalModel')

const getGoals = asyncHandler(async (req,res) => {
  const goals = await Goal.find()
    res.status(200).json(goals)
}) 

const setGoal = asyncHandler(async(req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  const goal = await Goal.create({
    text: req.body.text
  })
  res.status(200).json(goal)
}) 

const updateGoal = asyncHandler(async(req, res) => {
  const goal=await findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{neww:true})
  res.status(200).json(updatedGoal);
}) 

const deleteGoal = asyncHandler(async(req, res) => {
  const goal = await findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  // const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
  await goal.remove()
  res.status(200).json({id: req.params.id});
}) 

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}