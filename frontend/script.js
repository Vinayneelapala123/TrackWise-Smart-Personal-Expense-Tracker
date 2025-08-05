const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');
const total = document.getElementById('total');
const API = 'http://localhost:5000/api/expenses';

let expenses = [];

function renderExpenses() {
    list.innerHTML = '';
    let totalAmount = 0;
    expenses.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${exp.title} - ₹${exp.amount} 
            <button onclick="deleteExpense('${exp._id}')">X</button>`;
        list.appendChild(li);
        totalAmount += exp.amount;
    });
    total.innerText = totalAmount;
}

async function fetchExpenses() {
    const res = await fetch(API);
    expenses = await res.json();
    renderExpenses();
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const newExpense = {
        title: form.title.value,
        amount: Number(form.amount.value),
        date: form.date.value
    };
    await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense)
    });
    form.reset();
    fetchExpenses();
});

async function deleteExpense(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    fetchExpenses();
}

fetchExpenses();
