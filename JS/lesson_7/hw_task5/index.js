//put your code here
let clients = ['Den', 'Anna', 'Ben'];
let balances = [50, 60, 0];

function withdraw(clients, balances, client, amount) {
  let clientBalances = balances[clients.indexOf(client)];
  if (amount <= clientBalances) {
    clientBalances -= amount;
    balances[clients.indexOf(client)] = clientBalances;
    return clientBalances;
  } else {
    return -1;
  }
}

console.log(withdraw(clients, balances, 'Anna', 70));
