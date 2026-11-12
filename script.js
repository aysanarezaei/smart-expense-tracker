let transactions = [];

function addTransaction(event) {
    event.preventDefault();

    const type = document.getElementById("type").value;
    const amount = Number(document.getElementById("amount").value);
    const description = document.getElementById("description").value.trim();

    if (!Number.isFinite(amount) || amount <= 0 || description === "") {
        alert("Please enter a valid amount and description.");
        return;
    }

    const transaction = {
        type: type,
        amount: amount,
        description: description
    };

    transactions.push(transaction);

    updateDashboard();

    document.getElementById("transaction-form").reset();
}

function updateDashboard() {
    let income = 0;
    let expenses = 0;

    const list = document.getElementById("transaction-list");
    list.innerHTML = "";

    transactions.forEach(function(transaction) {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }

        const item = document.createElement("li");

        item.textContent =
            transaction.description + " - " +
            (transaction.type === "income" ? "+" : "-") +
            transaction.amount.toFixed(2) + " €";

        list.appendChild(item);
    });

    const balance = income - expenses;

    document.getElementById("total-income").textContent =
        income.toFixed(2) + " €";

    document.getElementById("total-expenses").textContent =
        expenses.toFixed(2) + " €";

    document.getElementById("total-balance").textContent =
        balance.toFixed(2) + " €";
}

document.getElementById("transaction-form").addEventListener(
    "submit",
    addTransaction
);
