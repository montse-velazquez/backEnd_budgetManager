const express = require('express')
const expensesRouter = express.Router();
const {getExpenses, addExpense, cleanExpenses} = require('../controllers/expenses_controllers')

expensesRouter.get("/", getExpenses);

module.exports = expensesRouter