const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// GET all
router.get('/', async (req, res) => {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
});

// POST new
router.post('/', async (req, res) => {
    const { title, amount, date } = req.body;
    const expense = new Expense({ title, amount, date });
    await expense.save();
    res.json(expense);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
});

module. Exports = router;
