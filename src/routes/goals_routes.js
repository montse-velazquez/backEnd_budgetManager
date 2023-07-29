const express = require('express')
const goalsRouter = express.Router();
const {getGoals, addGoal} = require('../controllers/goals_controllers')

goalsRouter.get("/", getGoals)

goalsRouter.post("/", addGoal)

module.exports = goalsRouter