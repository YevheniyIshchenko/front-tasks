import { renderTasks } from './renderer.js';

import { getItem, setItem } from './storage.js';

export const onToggleTask = (e) => {
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        createDate: done ? new Date().toISOString() : new Date().toISOString(),
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);

  renderTasks();
};
