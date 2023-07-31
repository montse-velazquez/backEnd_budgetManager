const Expenses = require('../models/expenses');

const getExpenses = async(request, response) => {
    let expenses = await Expenses;
    //expenses = await Expense.find()
    response.send(expenses);
}

module.exports = getExpenses