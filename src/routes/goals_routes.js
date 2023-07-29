const express = require('express')
const goalsRouter = express.Router();
const {getGoals, addGoal,updateGoal} = require('../controllers/goals_controllers')

goalsRouter.get("/", getGoals)

goalsRouter.post("/", addGoal)

goalsRouter.put("/:id", updateGoal)

module.exports = goalsRouter