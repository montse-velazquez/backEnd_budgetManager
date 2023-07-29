const express = require('express')
const goalsRouter = express.Router();
const {getGoals} = require('../controllers/goals_controllers')

goalsRouter.get("/", getGoals)

module.exports = goalsRouter