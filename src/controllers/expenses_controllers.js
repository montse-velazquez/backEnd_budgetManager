const Expenses = require('../models/expenses');

const getExpenses = async(request, response) => {
    let expenses = await Expenses;
    //expenses = await Expense.find()
    response.send(expenses);
}

//We add expenses to single categories, so at the end we will just be able to see a single amount with sum up of every expense that has been added before 
const addExpense = async(request, response) => {
    // Request user for their input so we can use category and amount value 
        let input = ({
            category: request.body.category,
            amount: request.body.amount
        })
    
        //As the categories where done by default there is no need to find its index, so we just chcek for the value of the category of the user 
         switch(input.category) {
            case "Eating Out":
                Expenses[0]['amount'] += input.amount['amount']
                response.status(201).send({"Added amount to": input });
                break;
            case "Groceries":
                Expenses[1]['amount'] += input.amount['amount']
                response.status(201).send({"Added amount to": input });
                break;
            case "Entertainment":
                Expenses[2]['amount'] += input.amount['amount']
                response.status(201).send({"Added amount to": input });
                break;
            case "Subscription":
                Expenses[3]['amount'] += input.amount['amount']
                response.status(201).send({"Added amount to": input });
                break;
            case "Other":
                Expenses[4]['amount'] += input.amount['amount']
                response.status(201).send({"Added amount to": input });
                break;
            default:
                response.status(400).send("Category was not found, please try again")
        }
    }

module.exports = getExpenses