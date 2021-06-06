const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: Math.round(Math.random() * 1000) },
  {
    text: 'Pick up Tom from airport',
    done: false,
    id: Math.round(Math.random() * 1000),
  },
  { text: 'Visit party', done: false, id: Math.round(Math.random() * 1000) },
  { text: 'Visit doctor', done: true, id: Math.round(Math.random() * 1000) },
  { text: 'Buy meat', done: true, id: Math.round(Math.random() * 1000) },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = '';

  listElem.append(...tasksElems);
};

const checkedList = (event) => {


  // const checkBoxTarget = document.querySelectorAll('.list__item-checkbox');
  // const inputDone = document.querySelectorAll('.list__item');
  // const arr = [...checkBoxTarget];
  // const arr2 = [...inputDone];
  // // console.log([...checkBoxTarget]);
  
  // console.log(arr);
  // console.log(arr2);



  const checkBoxTarget = event.target.dataset.id;
  console.log(checkBoxTarget);
  const taskDone = tasks.filter((el) => el.id === Number(checkBoxTarget));
  console.log(taskDone);
  taskDone.done = event.target.checked;
  
  console.log((taskDone.done = event.target.checked));
  console.log(taskDone);
};


renderTasks(tasks);


listElem.addEventListener('click', checkedList,);



renderTasks(tasks);


