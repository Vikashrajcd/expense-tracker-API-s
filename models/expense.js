const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    id: Number,
    amount: Number,
    desc: String,
    title: String,
});
const Expense = mongoose.model('Expense',expenseSchema);//singular in this(Expense) but it will automatically checks in plural of(Expenses)
module.exports = Expense;