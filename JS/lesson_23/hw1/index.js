const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

tasks.map((element) => (element.id = Math.round(Math.random() * 1000)));

// tasks.forEach((element) => (element.id = Math.round(Math.random() * 1000)));

console.log('task', tasks);

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

renderTasks(tasks);

const checkInput = (event) => {
  const checkboxDone = event.target.dataset.id;
  const resDone = tasks.find((el) => el.id === Number(checkboxDone));
  resDone.done = event.target.checked;
  console.log(checkboxDone);
  renderTasks(tasks);
};

listElem.addEventListener('click', checkInput);
console.log('taskAdd', tasks);

const createTask = () => {
  const taskCreate = document.querySelector('.task-input');
  const taskValue = taskCreate.value;
  if (taskValue === '') {
    return;
  }

  tasks.push({
    text: taskValue,
    done: false,
    id: Math.round(Math.random() * 1000),
  });
  taskCreate.value = '';
  renderTasks(tasks);
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', createTask);

renderTasks(tasks);
