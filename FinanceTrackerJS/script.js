document.addEventListener('DOMContentLoaded', loadExpenses);
document.getElementById('add-expense-button').addEventListener('click', addExpense);

function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => createExpenseElement(expense.description, expense.amount));
}

function addExpense() {
    const expenseInput = document.getElementById('expense-input');
    const amountInput = document.getElementById('amount-input');
    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description !== '' && !isNaN(amount) && amount > 0) {
        createExpenseElement(description, amount);
        saveExpense(description, amount);
        expenseInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter a valid positive amount.');
    }
}

function createExpenseElement(description, amount) {
    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    
    const textSpan = document.createElement('span');
    textSpan.textContent = `${description}: $${amount.toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        removeExpense(description, amount);
    });

    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    expenseList.appendChild(listItem);
}

function saveExpense(description, amount) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push({ description, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function removeExpense(description, amount) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = expenses.filter(expense => !(expense.description === description && expense.amount === amount));
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
}
