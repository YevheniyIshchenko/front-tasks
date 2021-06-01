export const getTitle = () => {
  const title = document.querySelector('.title').textContent;
  return title;
};

export const getDescription = () => {
  const decription = document.querySelector('.about').innerText;
  return decription;
};

export const getPlans = () => {
  const plan = document.querySelector('.plans').innerHTML;
  return plan;
};

export const getGoal = () => {
  const goal = document.querySelector('.goal').outerHTML;
  return goal;
};

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
