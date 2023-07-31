const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const goalsRouter = require('./routes/goals_routes')
app.use("/goals", goalsRouter)

const expensesRouter = require('./routes/expenses_routes')
app.use("/expenses", expensesRouter)

module.exports = app;