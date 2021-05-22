function getPeople(obj) {
  let arr = Object.values(obj)
    .flat()
    .map(function (arr) {
      return arr.name;
    });
  return arr;
}

const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

getPeople(rooms);

// var wizards = [
//   {
//     name: 'Harry Potter',
//     house: 'Gryfindor',
//   },
//   {
//     name: 'Cedric Diggory',
//     house: 'Hufflepuff',
//   },
//   {
//     name: 'Tonks',
//     house: 'Hufflepuff',
//   },
//   {
//     name: 'Ronald Weasley',
//     house: 'Gryfindor',
//   },
//   {
//     name: 'Hermione Granger',
//     house: 'Gryfindor',
//   },
// ];

// // Получаем имена волшебников из Хаффлпафф
// var hufflepuff = wizards.filter(function (wizard) {
//   return wizard.house === 'Hufflepuff';
// }).map(function (wizard) {
//   return wizard.name;
// });

// console.log(hufflepuff);
