const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreenDiv, true);
pElem.addEventListener('click', logGreenP, true);
spanElem.addEventListener('click', logGreenSpan, true);

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

const clearBtn = document.querySelector('.clear-btn');

const clearList = () => {
  eventsListElem.innerHTML = '';
};

clearBtn.addEventListener('click', clearList);

const attachBtn = document.querySelector('.attach-handlers-btn');

const onAttachBtn = () => {
  divElem.addEventListener('click', logGreenDiv, true);
  pElem.addEventListener('click', logGreenP, true);
  spanElem.addEventListener('click', logGreenSpan, true);

  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);
};

attachBtn.addEventListener('click', onAttachBtn);

const removeBtn = document.querySelector('.remove-handlers-btn');

const offRemoveBtn = () => {
  divElem.removeEventListener('click', logGreenDiv, true);
  pElem.removeEventListener('click', logGreenP, true);
  spanElem.removeEventListener('click', logGreenSpan, true);

  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);
};

removeBtn.addEventListener('click', offRemoveBtn);
