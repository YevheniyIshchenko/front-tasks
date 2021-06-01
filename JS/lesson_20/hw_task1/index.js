export class Order {
  constructor(price, city, type) {
    this.id = Math.round(Math.random() * 100000000).toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.price = price;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    } else {
      return false;
    }
  }
  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }
  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    } else {
      return false;
    }
  }
}

const order1 = new Order(1500, 'Kyiv', 'Buy');
console.log(order1);
console.log(order1.checkPrice());
console.log(order1);
order1.confirmOrder();
console.log(order1);
console.log(order1.isValidType());
console.log(order1);
