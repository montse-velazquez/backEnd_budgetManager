const Goal = require('../models/goals');

// Retrieves all goals from the Goals collection 
const getGoals = async (request, response) => {
    let goals = await Goal
    // goals = await Goal.find()
    response.send(goals);
}

//Add a goal to the Goals collection
const addGoal = async (request, response) => {
    // let newGoal = new Goal ({...
    let newGoal = ({
        title: request.body.title,
        targetAmount: request.body.targetAmount,
        initialAmount: request.body.targetAmount
    })

    // Add when you get the database
    // await newGoal.save()
    let user = await Goal.push(newGoal)
    response.status(201).json(newGoal)
}

module.exports = {getGoals, addGoal}