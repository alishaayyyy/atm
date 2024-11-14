// Initial balance 
var balance = 0;

function updateBalance() {
    document.getElementById('balanceDisplay').innerText = 'Your Balance: Rs ' + balance;
}

function showDeposit() {
    document.getElementById('depositSection').style.display = 'block';
    document.getElementById('withdrawSection').style.display = 'none';
    document.getElementById('feedbackMessage').innerText = ''; 
}

// Show withdraw section
function showWithdraw() {
    document.getElementById('withdrawSection').style.display = 'block';
    document.getElementById('depositSection').style.display = 'none';
    document.getElementById('feedbackMessage').innerText = ''; 
}

// Check balance (without needing to show a section)
function checkBalance() {
    document.getElementById('depositSection').style.display = 'none';
    document.getElementById('withdrawSection').style.display = 'none';
    document.getElementById('feedbackMessage').innerText = 'Your Balance: Rs' + balance;
}

// Deposit money
function depositMoney() {
    var depositAmount = document.getElementById('depositAmount').value;
    depositAmount = parseFloat(depositAmount);

    // Check if deposit amount is valid
    if (isNaN(depositAmount) || depositAmount <= 0) {
        document.getElementById('feedbackMessage').innerText = 'Please enter a valid deposit amount greater than zero.';
        return;
    }

    // Update balance
    balance += depositAmount;
    updateBalance(); 
    document.getElementById('feedbackMessage').innerText = 'Deposit successful!';
    document.getElementById('depositAmount').value = '';
}

// Withdraw money
function withdrawMoney() {
    var withdrawAmount = document.getElementById('withdrawAmount').value;
    withdrawAmount = parseFloat(withdrawAmount);

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        document.getElementById('feedbackMessage').innerText = 'Please enter a valid withdraw amount greater than zero.';
        return;
    }

    if (withdrawAmount > balance) {
        document.getElementById('feedbackMessage').innerText = 'Insufficient funds!';
        return;
    }

    // Update balance
    balance -= withdrawAmount;
    updateBalance(); 
    document.getElementById('feedbackMessage').innerText = 'Withdrawal successful!';
    document.getElementById('withdrawAmount').value = ''; 
}

updateBalance();

