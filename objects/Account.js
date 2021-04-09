const Account = {
    accountOwner: 'John Doe',
    expenses: 0,
    income: 0
}

const addExpense = (account, amount) => account.expenses += amount
const addIncome = (account, income) => account.income + income
const resetAccount = account => {
    account.expenses = 0
    account.income = 0
}
const getAccountSummary = account => {
    const balance = account.income - account.expenses
    return `Account for ${account.accountOwner} has $${balance}, $${account.income} in income.`
}

addIncome(Account, 5000)
addExpense(Account, 800)
addExpense(Account, 450)
console.log(getAccountSummary(Account))
    
