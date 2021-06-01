export const wallet = {
  transactions: [56, 85, 4, 96, 45, 32, 47],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
