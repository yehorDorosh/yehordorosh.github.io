//---------------format values in table

{
let deposit = [];
let account = [];
let newDeposit = [];
let newAccount = [];

for (let i = 1; i < table.rows.length; i++) {
    deposit[i - 1] = table.rows[i].cells[1].innerText;
    account[i - 1] = table.rows[i].cells[2].innerText;
}

for (let i = 0; i < deposit.length; i++) {
    let num = deposit[i].slice(1);
    let formatNum = new Intl.NumberFormat('ru-RU', {}).format(num);
    newDeposit.push('$' + formatNum);

    newAccount.push(new Intl.NumberFormat('ru-RU', {}).format(account[i]));
}

for (let i = 1; i < 11; i++) {
    table.rows[i].cells[1].innerText = newDeposit[i - 1];
    table.rows[i].cells[2].innerText = newAccount[i - 1];
}
}