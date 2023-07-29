const express = require('express')
const goalsRouter = express.Router();
const {getGoals, addGoal,updateGoal, addAmount, deleteGoal, deleteAllGoals} = require('../controllers/goals_controllers')

goalsRouter.get("/", getGoals)

goalsRouter.post("/", addGoal)

goalsRouter.put("/:id", updateGoal)

goalsRouter.delete("/:id", deleteGoal)

goalsRouter.delete("/delete", deleteAllGoals)

goalsRouter.put("/addAmount/:goalId", addAmount)

module.exports = goalsRouter