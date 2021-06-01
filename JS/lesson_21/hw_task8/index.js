export const finishList = () => {
  const createList1 = document.createElement('li');
  createList1.textContent = 1;
  const createList4 = document.createElement('li');
  createList4.textContent = 4;
  const createList6 = document.createElement('li');
  createList6.textContent = 6;
  const createList8 = document.createElement('li');
  createList8.textContent = 8;

  const insertList = document.querySelector('.list');
  insertList.append(createList8);
  insertList.prepend(createList1);

  const insertSpecial = document.querySelector('.special');
  insertSpecial.before(createList4);
  insertSpecial.after(createList6);
};

// finishList();
