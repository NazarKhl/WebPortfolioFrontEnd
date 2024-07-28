document.addEventListener('DOMContentLoaded', renderChart);

function renderChart() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const labels = expenses.map(expense => expense.description);
    const data = expenses.map(expense => expense.amount);

    const ctx = document.getElementById('expense-chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Expenses',
                data: data,
                backgroundColor: [
                    '#b0bec5',
                    '#cfd8dc',
                    '#eceff1',
                    '#90a4ae',
                    '#607d8b'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });
}
