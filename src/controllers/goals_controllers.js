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

//updates the inputs of the specified goal form the Goals collection 
const updateGoal = async (request, response) => {
    
    //For when database works ==> 
    // let updatedGoal = await Goal.findIdAndUpdated(request.params.id, request.body, {new: true})
    //     .catch(error => {
    //         console.log("Some error while accessing data:\n" + error)
    //     })

    // if (updatedGoal) {
    //     response.send(updatedNote)
    // } else {
    //     response.json({error: "id not found"})
    // }

    const id = request.params.id;
    const updatedGoal = request.body;
    Goal[id] = updatedGoal;
    response.send(updatedGoal);
    // response.json({error: "id not found"})


    }


module.exports = {getGoals, addGoal, updateGoal}