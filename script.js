let transactions = [];

function addTransaction() {
    const type = document.getElementById("type").value;
    const amount = Number(document.getElementById("amount").value);
    const description = document.getElementById("description").value;

    if (amount <= 0 || description.trim() === "") {
        alert("Please enter a valid amount and description.");
        return;
    }

    const transaction = {
        type: type,
        amount: amount,
        description: description
    };

    transactions.push(transaction);

    console.log(transactions);

    alert("Transaction added successfully!");
}
