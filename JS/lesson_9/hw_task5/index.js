const getTotalRevenue = (transactions) => {
  let arr = transactions.map((price) => price.operation);
  let sum = arr.reduce((num1, num2) => num1 + num2);
  return sum;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell_sdg' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
