const Goal = require('../models/goals');

// Retrieves all goals from the Goals collection 
const getGoals = async (request, response) => {
    let goals = await Goal
    // goals = await Goal.find()
    response.send(goals);
}

module.exports = {getGoals}